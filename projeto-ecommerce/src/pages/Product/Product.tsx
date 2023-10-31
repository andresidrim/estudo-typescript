import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { BsCartPlus } from 'react-icons/bs';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';
import { ProductProps } from '../Home/Home';
import { toast } from 'react-toastify';

const Product = () => {
	const [productInfo, setProductInfo] = useState<ProductProps>();

	const { id } = useParams();

	const { addItemToCart } = useContext(CartContext);

	const handleAddItem = (product: ProductProps) => {
		toast.success('Produto adicionado!');
		addItemToCart(product);
	};

	const getProductInfo = async () => {
		const response = await api.get(`/products/${id}`);
		setProductInfo(response.data);
	};

	useEffect(() => {
		getProductInfo();
	}, []);

	return (
		<div className='w-full px-8 mx-auto'>
			<section className='flex max-md:flex-col items-start justify-center gap-10 mt-16'>
				<img
					className='w-full max-w-sm'
					src={productInfo?.cover}
					alt={productInfo?.title}
				/>

				<div className='w-full max-w-xl text-justify'>
					<h1 className='font-bold mt-8 mb-4 text-2xl'>{productInfo?.title}</h1>
					<p className='font-medium'>{productInfo?.description}</p>
					<section className='mt-2'>
						<strong className='mr-4'>
							{productInfo?.price.toLocaleString('pt-BR', {
								style: 'currency',
								currency: 'BRL'
							})}
						</strong>
						<button
							className='bg-zinc-900 p-1 rounded'
							onClick={() => handleAddItem(productInfo!)}
						>
							<BsCartPlus size={20} color='white' />
						</button>
					</section>
				</div>
			</section>
		</div>
	);
};

export default Product;
