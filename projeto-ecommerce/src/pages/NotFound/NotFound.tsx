import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='w-full min-h-screen flex flex-col items-center justify-center mx-auto px-4'>
			<h1 className='font-bold text-4xl'>Página não encontrada</h1>
			<Link
				className='bg-zinc-900 text-white px-4 py-1 mt-4 rounded-md transition hover:scale-105 hover:bg-blue-600'
				to='/'
			>
				Voltar para Home
			</Link>
		</div>
	);
};

export default NotFound;
