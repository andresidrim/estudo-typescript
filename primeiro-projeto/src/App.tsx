import { useState } from 'react';

function App() {
	type AlunoProps = {
		nome: string;
		idade: number | undefined;
	};

	const [input, setInput] = useState<string>('');
	const [idadeInput, setIdadeInput] = useState<number>();
	const [alunoInfo, setAlunoInfo] = useState<AlunoProps>();

	const [contador, setContador] = useState<number>(0);

	const [user, setUser] = useState<string>('Visitante!');
	const [userInput, setUserInput] = useState<string>('');

	const login = () => {
		userInput === '' ? setUser('Visitante!') : setUser(userInput);
	};

	const mostrarAluno = () => {
		setAlunoInfo({
			nome: input,
			idade: idadeInput
		});
	};

	const checkInputValues = (): boolean => {
		return (
			alunoInfo?.nome !== undefined &&
			alunoInfo?.idade !== undefined &&
			!Number.isNaN(alunoInfo?.idade)
		);
	};

	const adicionar = () => {
		setContador((prevState) => prevState + 1);
	};

	const diminuir = () => {
		if (contador === 0) {
			return;
		}

		setContador((prevState) => prevState - 1);
	};

	return (
		<div>
			<h1>Conhecendo useState</h1>
			<input
				placeholder='Digite o seu nome'
				value={userInput}
				onChange={(e) => setUserInput(e.target.value)}
			/>
			{<button onClick={login}>Entrar</button>}
			<h3>{'Olá, ' + user}</h3>
			<br />
			<br />
			<input
				placeholder='Digite o nome'
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<input
				placeholder='Digite a idade'
				value={idadeInput}
				onChange={(e) => setIdadeInput(Number(e.target.value))}
			/>
			<br />
			<button onClick={mostrarAluno}>Mostrar Aluno</button>
			<hr />
			{checkInputValues() && (
				<div>
					<h3>Bem vindo: {alunoInfo?.nome}</h3>
					<h4>Idade: {alunoInfo?.idade}</h4>
				</div>
			)}
			<hr />
			<br />
			<h1>Contador com useState</h1>
			<button onClick={adicionar}>+</button> {contador}{' '}
			<button onClick={diminuir}>-</button>
		</div>
	);
}

export default App;
