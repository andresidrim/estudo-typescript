import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='flex flex-col w-full justify-center items-center text-white min-h-screen'>
			<h1 className='font-bold text-4xl mb-4'>Página não encontrada</h1>
			<p className='italic text-xl mb-4'>
				Você caiu em uma página inexistente!
			</p>
			<Link
				to='/'
				className='bg-gray-50/20 py-1 px-4 rounded-md transition-transform hover:scale-105'
			>
				Voltar para home
			</Link>
		</div>
	);
};

export default NotFound;
