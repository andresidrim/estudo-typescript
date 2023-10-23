import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1>Bem vindo</h1>
			<span>Essa é minha primeira pagina com navegacao</span>
			<br />
			<Link to='/about'>Sobre</Link>
			<br />
			<Link to='/contato'>Contato</Link>
		</div>
	);
};

export default Home;
