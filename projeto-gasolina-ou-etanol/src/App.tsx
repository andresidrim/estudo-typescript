import { useState, FormEvent } from 'react';
import Logo from './assets/logo.png';
import './App.css';

type ResultProps = {
	title: string;
	gasolina: number | string;
	alcool: number | string;
};

function App() {
	const [gasolinaInput, setGasolinaInput] = useState<number>(1);
	const [alcoolInput, setAlcoolInput] = useState<number>(1);
	const [result, setResult] = useState<ResultProps>();

	const calcular = (event: FormEvent) => {
		event.preventDefault();

		let calculo: number = alcoolInput / gasolinaInput;

		calculo <= 0.7
			? setResult({
					title: 'Use alcool',
					gasolina: formatarResultado(gasolinaInput),
					alcool: formatarResultado(alcoolInput)
			  })
			: setResult({
					title: 'Use gasolina',
					gasolina: formatarResultado(gasolinaInput),
					alcool: formatarResultado(alcoolInput)
			  });
	};

	const formatarResultado = (valor: number): string => {
		let valorFormatado = valor.toLocaleString('pt-br', {
			style: 'currency',
			currency: 'BRL'
		});

		return valorFormatado;
	};

	return (
		<div className='App'>
			<main className='container'>
				<img
					className='Logo'
					src={Logo}
					alt='Logo da calculadora de gasolina ou alcool'
				/>
				<h1 className='title'>Qual a melhor opção?</h1>

				<form className='form' onSubmit={calcular}>
					<label>Alcool (preço por litro): </label>
					<input
						className='input'
						type='number'
						placeholder='4.90'
						min='0'
						step='0.01'
						required
						value={alcoolInput}
						onChange={(e) => setAlcoolInput(Number(e.target.value))}
					/>

					<label>Gasolina (preço por litro): </label>
					<input
						className='input'
						type='number'
						placeholder='4.90'
						min='0'
						step='0.01'
						required
						value={gasolinaInput}
						onChange={(e) => setGasolinaInput(Number(e.target.value))}
					/>

					<input className='button' type='submit' value='Calcular' />
				</form>

				{result && Object.keys(result).length > 0 && (
					<section className='result'>
						<h2 className='result-title'>{result.title}</h2>
						<span>Alcool: {result.alcool}</span>
						<span>Gasolina: {result.gasolina}</span>
					</section>
				)}
			</main>
		</div>
	);
}

export default App;
