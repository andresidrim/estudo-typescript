import { FormEvent, useState } from 'react';
import './App.css';

type UserProps = {
	nome: string;
	idade: number | undefined;
};

function App() {
	const [userInputNome, setUserInputNome] = useState<string>('');
	const [userInputYear, setUserInputYear] = useState<number>();

	const [user, setUser] = useState<UserProps>({
		nome: '',
		idade: undefined
	});

	const calcularIdade = (event: FormEvent) => {
		event.preventDefault();

		const dataAtual = new Date();
		const anoAtual = dataAtual.getFullYear();

		const idade = anoAtual - userInputYear!;
		setUser({
			nome: userInputNome,
			idade: idade
		});
	};

	return (
		<div className='App'>
			<h1 className='title'>Descubra a sua idade</h1>
			<section className='input-area'>
				<form onSubmit={calcularIdade}>
					<h4 className='input-title'>Digite o seu nome:</h4>
					<input
						className='user-input'
						placeholder='ex: André Sidrim'
						value={userInputNome}
						onChange={(e) => setUserInputNome(e.target.value)}
						required
					/>
					<h4 className='input-title'>Digite o ano que nasceu:</h4>
					<input
						className='user-input'
						placeholder='ex: 2004'
						type='number'
						step='1'
						min='1900'
						value={userInputYear}
						onChange={(e) => setUserInputYear(Number(e.target.value))}
						required
					/>
					<input
						className='calculate-age-button'
						type='submit'
						value='Descobrir idade'
					/>
				</form>
			</section>

			{user.nome !== '' && (
				<section className='result-section'>
					<p className='result'>
						{user.nome} possui {user.idade} anos!
					</p>
				</section>
			)}
		</div>
	);
}

export default App;
