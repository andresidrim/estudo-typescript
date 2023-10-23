import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			<h1>Ops, essa pagina nao existe</h1>
			<Link to='/'>Home</Link>
		</div>
	);
};

export default NotFound;
