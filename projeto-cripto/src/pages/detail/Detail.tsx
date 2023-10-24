import { useState, useEffect } from 'react';
import style from './Detail.module.css';
import { useParams, useNavigate } from 'react-router-dom';

type CoinProps = {
	symbol: string;
	name: string;
	price: string;
	market_cap: string;
	low_24h: string;
	high_24h: string;
	total_volume: string;
	delta_24h: string;
	formatedPrice: string;
	formatedMarket: string;
	formatedLowPrice: string;
	formatedHighPrice: string;
	formatedDelta: number;
};

const Detail = () => {
	const [detail, setDetail] = useState<CoinProps>();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const { symbol } = useParams();

	const navigate = useNavigate();

	const getData = async () => {
		try {
			const response = await fetch(
				`https://sujeitoprogramador.com/api-cripto/coin/?key=14f4843a9573cde6&symbol=${symbol}`
			);

			const data: CoinProps = await response.json();

			const price = Intl.NumberFormat('pt-BR', {
				style: 'currency',
				currency: 'BRL'
			});

			const resultData = {
				...data,
				formatedPrice: price.format(Number(data.price)),
				formatedMarket: price.format(Number(data.market_cap)),
				formatedLowPrice: price.format(Number(data.low_24h)),
				formatedHighPrice: price.format(Number(data.high_24h)),
				formatedDelta: parseFloat(data.delta_24h.replace(',', '.'))
			};

			setDetail(resultData);
			setIsLoading(false);
		} catch (error) {
			navigate('/');
		}
	};

	useEffect(() => {
		getData();
	}, [symbol]);

	if (isLoading) {
		return (
			<div className={style.container}>
				<h4 className={style.center}>Carregando informações...</h4>
			</div>
		);
	}

	return (
		<div className={style.container}>
			<h1 className={style.center}>{detail?.name}</h1>
			<p className={style.center}>{detail?.symbol}</p>

			<section className={style.content}>
				<p>
					<strong>Preço:</strong> {detail?.formatedPrice}
				</p>
				<p>
					<strong>Maior Preço (24h):</strong> {detail?.formatedHighPrice}
				</p>
				<p>
					<strong>Menor Preço (24h):</strong> {detail?.formatedLowPrice}
				</p>
				<p>
					<strong>Delta (24h):</strong>
					<span
						className={
							detail?.formatedDelta && detail?.formatedDelta >= 0
								? style.profit
								: style.loss
						}
					>
						{detail?.delta_24h}
					</span>
				</p>
				<p>
					<strong>Valor mercado (24h):</strong> {detail?.formatedMarket}
				</p>
			</section>
		</div>
	);
};

export default Detail;
