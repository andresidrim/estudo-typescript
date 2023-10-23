import { useState } from 'react';
import './App.css';
import Logo from './assets/logo.png';

function App() {
	const [textoFrase, setTextoFrase] = useState<string>('');
	const [categoriaSelecionada, setCategoriaSelecionada] = useState<number>(0);

	const allFrases = [
		{
			id: 0,
			nome: 'Motivação',
			frases: [
				'Siga os bons e aprenda com eles',
				'O bom senso vale mais do que muito conhecimento',
				'O riso é a menor distância entre duas pessoas',
				'Deixe de lado as precupações e seja feliz',
				'Realize o óbvio, pense no improvável e conquiste o impossível',
				'Acredite em milagres, mas não dependa deles',
				'A maior barreira para o sucesso é o medo do fracasso'
			]
		},
		{
			id: 1,
			nome: 'Bom dia',
			frases: [
				'Acordar de bem com a vida é o primeiro passo para ter um dia abençoado! Bom dia, família',
				'A melhor forma de acordar é pular da cama e se preparar para correr atras de todos os seus sonhos! Bom dia, mundo!',
				'Escreva em seu coração: todo dia é o melhor dia do ano',
				'Bom dia! Não se esqueça que a sua alma é o reflexo do sol, tão forte e brilhante quanto um girassol'
			]
		}
	];

	const handleSwitchCategory = (categoryId: number) => {
		setCategoriaSelecionada(categoryId);
	};

	const gerarFrase = () => {
		let numeroAleatorio = Math.floor(
			Math.random() * allFrases[categoriaSelecionada].frases.length
		);

		setTextoFrase(
			`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`
		);
	};

	return (
		<div className='App'>
			<img className='logo' src={Logo} alt='Logo dev frases' />

			<h2 className='title'>Categorias</h2>

			<section className='categories'>
				{allFrases.map((item) => (
					<button
						className='category-button'
						key={item.id}
						style={{
							borderWidth:
								item.id === allFrases[categoriaSelecionada].id ? 2 : 0,
							borderColor: '#1fa4db'
						}}
						onClick={() => handleSwitchCategory(item.id)}
					>
						{item.nome}
					</button>
				))}
			</section>

			<button className='button-frase' onClick={gerarFrase}>
				Gerar frase
			</button>
			{textoFrase !== '' && <p className='texto-frase'>{textoFrase}</p>}
		</div>
	);
}

export default App;
