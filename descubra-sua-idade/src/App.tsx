import { useState } from 'react';
import './App.css';

type UserProps = {
	nome: string;
	ano: number;
};

function App() {
	const [user, setUser] = useState<UserProps>();

	return (
		<div className='App'>
			<h1 className='title'>Descubra a sua idade</h1>
			<section className='input-area'>
				<h4 className='input-title'>Digite o seu nome:</h4>
				<input className='user-input' placeholder='ex: André Sidrim' />
				<h4 className='input-title'>Digite o ano que nasceu:</h4>
				<input
					className='user-input'
					placeholder='ex: 2004'
					type='number'
					step='1'
				/>
				<button className='calculate-age-button'>Descobrir idade</button>
			</section>
		</div>
	);
}

export default App;
