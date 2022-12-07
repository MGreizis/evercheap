import React, { useState, useEffect } from 'react';
import Combobox from "react-widgets/Combobox";

function getData(event) {
	console.log('testing', event)
}

export default function Home() {
	// using use state hook to update the state variable
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [stores, setShops] = useState([]);
	const [products, setProducts] = useState([]);
	const [shop, setShop] = useState();

	useEffect(() => {
		fetch("http://localhost:3010/stores")
			.then(res => res.json())
			.then(
				(data) => {
					setIsLoaded(true);
					setShops(data);
					setShop(data);
					console.log(data);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			)
	}, [])
	useEffect(() => {
		fetch("http://localhost:3012/stores/products")
			.then(res => res.json())
			.then(
				(items) => {
					setProducts(items);
					console.log(items);
				}
			)
	}, [])
	
	if (error) {
		return <div>Error</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<><div>
				<button onClick={getData}>confirm</button>
				<Combobox
					hideCaret
					hideEmptyPopup
					data={stores.data.map(store => (store.name))}
					value={shop.name} // set selected value
					onChange={getData}
				/>
			</div><div>
					<ul>
						{stores.data.map(store => (
							<li key={store.id}>
								<div>
									<h1>{store.name}</h1>
									<h1>{store.id}</h1>
								</div>
							</li>
						))}
					</ul>
					<ul>
						{products.items?.map(product => (
							<li key={product.id}>
								<div>
									<h1>{product.name}</h1>
									<h1>{product.id}</h1>
								</div>
							</li>
						))}
					</ul>
				</div></>
		);
	}
}

function callStore(name) {
	console.log("I am here")



}
