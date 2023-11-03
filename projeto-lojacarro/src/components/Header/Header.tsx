import { Link } from 'react-router-dom';
import { FiUser, FiLogIn } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';

const Header = () => {
	const signed = true;
	const loadingAuth = false;

	return (
		<div className='w-full flex items-center justify-center h-16 bg-white drop-shadow mb-4'>
			<header className='flex w-full max-w-7xl items-center justify-between px-4 mx-auto'>
				<Link to='/'>
					<img src={Logo} alt='Logo Web Carros' />
				</Link>

				{!loadingAuth && signed && (
					<Link to='/dashboard'>
						<div className='border-2 border-solid border-gray-900 rounded-full p-1'>
							<FiUser size={24} color='black' />
						</div>
					</Link>
				)}

				{!loadingAuth && !signed && (
					<Link to='/login'>
						<div className='border-2 border-solid border-gray-900 rounded-full p-1'>
							<FiLogIn size={24} color='black' />
						</div>
					</Link>
				)}
			</header>
		</div>
	);
};

export default Header;
