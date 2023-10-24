import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Home.module.css';
import { BiSearch } from 'react-icons/bi';

// https://coinlib.io/api/v1/coinlist?key=14f4843a9573cde6&pref=BTC&page=1&order=volume_desc

type CoinProps = {
	name: string;
	delta_24h: string;
	price: string;
	symbol: string;
	volume_24h: string;
	market_cap: string;
	formatedPrice: string;
	formatedMarket: string;
};

type DataProps = {
	coins: CoinProps[];
};

const Home = () => {
	const [coins, setCoins] = useState<CoinProps[]>([]);

	const getData = async () => {
		const response = await fetch(
			'https://sujeitoprogramador.com/api-cripto/?key=14f4843a9573cde6'
		);
		const data: DataProps = await response.json();

		const coinsData = data.coins.slice(0, 15);

		const price = Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL'
		});

		const formatResult = coinsData.map((item) => {
			const formated = {
				...item,
				formatedPrice: price.format(Number(item.price)),
				formatedMarket: price.format(Number(item.market_cap))
			};

			return formated;
		});
		setCoins(formatResult);
	};

	useEffect(() => {
		getData();
	});

	return (
		<main className={style.container}>
			<form className={style.form}>
				<input placeholder='Digite o simbolo da moeda (Ex: BTC)' />
				<button type='submit'>
					<BiSearch size={30} />
				</button>
			</form>

			<table>
				<thead>
					<tr>
						<th scope='col'>Moeda</th>
						<th scope='col'>Valor Mercado</th>
						<th scope='col'>Preço</th>
						<th scope='col'>Volume</th>
					</tr>
				</thead>

				<tbody id='tbody'>
					{coins.map((coin) => (
						<tr key={coin.name} className={style.tr}>
							<td className={style.tdlabel} data-label='Moeda'>
								<Link className={style.link} to={`/detail/${coin.symbol}`}>
									<span>{coin.name}</span> | {coin.symbol}
								</Link>
							</td>
							<td className={style.tdlabel} data-label='Mercado'>
								{coin.formatedMarket}
							</td>
							<td className={style.tdlabel} data-label='Preço'>
								{coin.formatedPrice}
							</td>
							<td
								className={
									Number(coin?.delta_24h) >= 0 ? style.tdprofit : style.tdloss
								}
								data-label='Volume'
							>
								<span>{coin.delta_24h}</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</main>
	);
};

export default Home;
