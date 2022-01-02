import React from 'react';
import '../Coin.css';

const Coin = ({
	name,
	image,
	symbol,
	price,
	volume,
	priceChange,
	marketCap,
}) => {
	// &#8377;
	return (
		<div className="coin-container">
			<div className="coin-row">
				<div className="coin">
					<img src={image} alt="crypto" />
					<h1>{name}</h1>
					<p className="coin-symbol">{symbol}</p>
				</div>

				<div className="coin-data">
					<p className="coin-price">&#36;{price}</p>
					<p className="coin-volume">
						&#36;{volume.toLocaleString()}
						{/* TO ADD COMMAS TO THE MONEY --toLocaleString() */}
					</p>

					{/*TERNARY OPERATOR*/}

					{priceChange < 0 ? (
						<p className="coin-percent red">
							{priceChange.toFixed(2)}%
						</p>
					) : (
						<p className="coin-percent green">
							+{priceChange.toFixed(2)}%
						</p>
					)}

					<p className="coin-marketcap">
						Mkt Cap: ${marketCap.toLocaleString()}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Coin;
