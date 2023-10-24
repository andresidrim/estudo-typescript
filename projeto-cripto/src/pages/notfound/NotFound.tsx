import { Link } from 'react-router-dom';
import style from './NotFound.module.css';

const NotFound = () => {
	return (
		<div className={style.container}>
			<h1>Pagina 404 não existe</h1>
			<Link to='/'>Acessar criptomoedas</Link>
		</div>
	);
};

export default NotFound;
