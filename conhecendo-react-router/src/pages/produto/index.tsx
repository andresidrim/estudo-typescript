import { useParams } from 'react-router-dom';

const Produto = () => {
	const { productname } = useParams();

	return (
		<div>
			<h1>Pagina de produtos {productname}</h1>
		</div>
	);
};

export default Produto;
