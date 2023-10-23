import { useState } from 'react';
import './App.css';
import Logo from './assets/logo.png';

function App() {
	return (
		<div className='App'>
			<img className='logo' src={Logo} alt='Logo dev frases' />

			<h2 className='title'>Categorias</h2>

			<section className='categories'>
				<button className='category-button'>motivacao</button>
				<button className='category-button'>bem estar</button>
			</section>

			<button className='button-frase'>Gerar frase</button>
			<p className='texto-frase'>alguma frase</p>
		</div>
	);
}

export default App;
