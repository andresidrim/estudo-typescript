import Container from '../../components/Container/Container';

const Home = () => {
	return (
		<Container>
			<section className='bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-3'>
				<input
					className='w-full border-2 rounded-lg h-9 px-3 outline-none'
					placeholder='Digite o nome do carro...'
				/>
				<button className='bg-red-500 h-9 px-6 rounded-lg text-white font-medium text-lg'>
					Buscar
				</button>
			</section>
			<h1 className='font-bold text-center mt-6 text-2xl mb-4'>
				Carros novos e usados em todo o Brasil
			</h1>

			<main className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
				<section className='w-full bg-white rounded-lg p-1'>
					<img
						className='w-full rounded-lg mb-2 transition hover:scale-105 cursor-pointer'
						src='https://classic.exame.com/wp-content/uploads/2022/05/BMW-IX-8.jpg?quality=70&strip=info&w=1024'
						alt='Foto carro'
					/>
					<p className='font-bold mt-1 mb-2 px-2 text-xl'>BMW IX-8</p>

					<div className='flex flex-col px-2'>
						<span className='text-zinc-700 mb-6'>Ano 2016/2016 | 23.000km</span>
						<strong className='text-black font-medium text-xl'>
							R$ 190.000
						</strong>
					</div>

					<div className='w-full h-px bg-slate-200 my-2'></div>

					<div className='px-2 pb-2'>
						<span className='text-zinc-700'>Belém - PA</span>
					</div>
				</section>
			</main>
		</Container>
	);
};

export default Home;
