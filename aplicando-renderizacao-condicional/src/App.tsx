import { useState } from 'react';
import './App.css';

function App() {
	const [signed, setSigned] = useState<boolean>(false);

	return (
		<div className='App'>
			<button onClick={() => setSigned(!signed)}>
				{!signed ? 'Entrar' : 'Sair'}
			</button>
			{signed ? <h1>Bem vindo andre</h1> : <h1>Nenhum usuario online</h1>}
		</div>
	);
}

export default App;
