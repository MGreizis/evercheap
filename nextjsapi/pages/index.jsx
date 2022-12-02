import React, { useState, useEffect } from 'react';
import Combobox from "react-widgets/Combobox";

export default function Home() {


	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [stores, setShops] = useState([]);
// using use state hook to update the state variable
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
					console.log(setShop(data));
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
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

				<button onClick={callStore(shop)}>Potvrdiť</button>
				{/* <select id="shops" value={shop}
						onChange={(e) => setShop(e.value)}>
							<option value="lidl">lidl</option>
							<option value="ah">ah</option>
							<option value="jumbo">jumbo</option>
						</select>
						<h1>Selected shop: {shop}</h1>
						</div> */}

				<Combobox
					hideCaret
					hideEmptyPopup
					data={stores.data.map(store => (store.name))}
					value={shop.name} // set selected value
					onChange={(e) => setShop(e.target.value)}
  
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
				</div></>
		);
	}
}

function callStore(nazov) {
console.log("tu som")


	
}
