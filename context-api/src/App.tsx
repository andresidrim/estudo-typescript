import { useState } from 'react';
import Alunos from './components/Alunos/Alunos';
import Footer from './components/Footer/Footer';
import UserProvider from './contexts/user';

function App() {
	return (
		<UserProvider>
			<div>
				<h1>Escola DEV</h1>
				<br />
				<hr />

				<Alunos />
				<Footer />
			</div>
		</UserProvider>
	);
}

export default App;
