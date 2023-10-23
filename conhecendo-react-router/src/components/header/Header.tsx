import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
	return (
		<header>
			<h2>Sujeito programador</h2>

			<div>
				<Link to='/'>Home</Link>
				<Link to='/about'>Sobre</Link>
				<Link to='/contato'>Contato</Link>
			</div>
		</header>
	);
};

export default Header;
