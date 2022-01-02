import React, { useState, useEffect } from 'react';
import axios from 'axios'; //THIRD PARTY LIBRARY FOR API
import './App.css';
import Coin from './components/Coin';
import { v4 as uuid } from 'uuid'; //UNIQUE ID

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
	const [coins, setCoins] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		axios
			.get(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
			)
			.then((res) => {
				setCoins(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	});
	//Dependency array
	//To make the request one time as useEffect runs in an infinite loop

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const filteredCoins = coins.filter(
		(coin) => coin.name.toLowerCase().includes(search.toLowerCase())

		//returns an array
	);

	return (
		<div className="coin-app">
			<div className="coin-search">
				<h1 className="coin-text">Search a Currency</h1>

				<form>
					<input
						type="text"
						placeholder="Search"
						className="coin-input"
						onChange={handleChange}
						// value={search}
					/>
				</form>

				{filteredCoins.map((coin) => {
					return (
						<Coin
							key={uuid()} //Generates a unique id UUID package
							name={coin.name}
							image={coin.image}
							symbol={coin.symbol}
							price={coin.current_price}
							marketCap={coin.market_cap}
							priceChange={coin.price_change_percentage_24h}
							volume={coin.total_volume}
						/>
					);
				})}
			</div>
		</div>
	);
}
// setTimeout(function () {
// 	window.location.reload(1);
// }, 1000);

export default App;
