import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { BsCartPlus } from 'react-icons/bs';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export type ProductProps = {
	id: number;
	title: string;
	description: string;
	price: number;
	cover: string;
};

const Home = () => {
	const { addItemToCart } = useContext(CartContext);

	const [products, setProducts] = useState<ProductProps[]>([]);

	const getProducts = async () => {
		const response = await api.get('/products');
		setProducts(response.data);
	};

	useEffect(() => {
		getProducts();
	}, []);

	const handleAddItem = (product: ProductProps) => {
		toast.success('Produto adicionado!');
		addItemToCart(product);
	};

	return (
		<div>
			<main className='w-full max-w-7xl px-4 mx-auto'>
				<h1 className='font-bold text-2xl mb-4 mt-10 text-center'>
					Produtos em alta
				</h1>

				<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5'>
					{products.map((product) => (
						<section key={product.id} className='w-full'>
							<Link to={`/product/${product.id}`}>
								<img
									className='w-full rounded-lg max-h-70 mb-2'
									src={product.cover}
									alt={product.title}
								/>
							</Link>
							<p className='font-medium mt-1 mb-2'>{product.title}</p>

							<div className='flex gap-3 items-center'>
								<strong className='text-zinc-700;90'>
									{product.price.toLocaleString('pt-BR', {
										style: 'currency',
										currency: 'BRL'
									})}
								</strong>
								<button
									onClick={() => handleAddItem(product)}
									className='bg-zinc-900 p-1 rounded transition hover:scale-105 hover:bg-blue-600'
								>
									<BsCartPlus size={20} color='white' />
								</button>
							</div>
						</section>
					))}
				</div>
			</main>
		</div>
	);
};

export default Home;
