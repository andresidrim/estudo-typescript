import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import { FormEvent, useState } from 'react';

const Login = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		console.log({ email: email, password: password });
	};

	return (
		<div className='flex flex-col w-full h-screen items-center justify-center'>
			<Link to='/'>
				<h1 className='mt-11 text-white mb-7 font-bold text-5xl'>
					Dev
					<span className='bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent'>
						Link
					</span>
				</h1>
			</Link>
			<form
				onSubmit={handleSubmit}
				className='w-full max-w-xl flex flex-col px-2'
			>
				<Input
					placeholder='Digite o seu email'
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					placeholder='********'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button
					type='submit'
					className='h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white transition-transform hover:scale-105'
				>
					Acessar
				</button>
			</form>
		</div>
	);
};

export default Login;
