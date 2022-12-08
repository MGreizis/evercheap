import React, { useState, useEffect } from 'react';
import Combobox from "react-widgets/Combobox";

let ComboboxSelectedValue = '';

function setDataFromCombobox(value) {
	if(value != null)
	{
		alert(value)
		ComboboxSelectedValue = value;
	}
}

function AlertComboboxValue() {
	alert(ComboboxSelectedValue);
}

// napisat 3 endpointy pre ten button teda 3 fetche aj /jumbostore/juboproducts
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
				(data) => {
					setProducts(data);
					console.log(data);
				}
			)
	}, [])
	
	if (error) {
		return <div>Error</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<>
				<button onClick={AlertComboboxValue}>confirm</button>
				<Combobox
					hideCaret
					hideEmptyPopup
					data={stores.data.map(store => (store.name))}
					value={shop.name} // set selected value
					onChange={setDataFromCombobox}/>
<div>
					
					<ul>
						{products.data.map(product => (
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
