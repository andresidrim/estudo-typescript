import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import style from './Header.module.css';

const Header = () => {
	return (
		<header className={style.container}>
			<div>
				<Link to='/'>
					<img src={Logo} alt='Logo Cripto' />
				</Link>
			</div>
		</header>
	);
};

export default Header;
