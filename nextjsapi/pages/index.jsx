import React, { useState, useEffect } from 'react';
import Combobox from "react-widgets/Combobox";

let ComboboxSelectedValue = '';

// button should get the value and know what products to show depending on the selected value
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

export default function Home() {
	// using use state hook to update the state variable
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [stores, setShops] = useState([]);
	const [jumboProducts, setJumboProducts] = useState([]);
	const [ahProducts, setAhProducts] = useState([]);
	const [lidlProducts, setLidlProducts] = useState([]);
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
		fetch("http://localhost:3013/stores/Jumboproducts")
			.then(res => res.json())
			.then(
				(data) => {
					setJumboProducts(data);
					console.log(data);
				}
			)
	}, [])
	// useEffect(() => {
	// 	fetch("http://localhost:3012/stores/ahProducts")
	// 		.then(res => res.json())
	// 		.then(
	// 			(data) => {
	// 				setAhProducts(data);
	// 				console.log(data);
	// 			}
	// 		)
	// }, [])
	// useEffect(() => {
	// 	fetch("http://localhost:3013/stores/lidlProducts")
	// 		.then(res => res.json())
	// 		.then(
	// 			(data) => {
	// 				setLidlProducts(data);
	// 				console.log(data);
	// 			}
	// 		)
	// }, [])
	
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
						{jumboProducts.data.map(product => (
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
