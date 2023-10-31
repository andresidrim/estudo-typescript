import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { router } from './routes';
import CartProvider from './contexts/CartContext';

function App() {
	return (
		<CartProvider>
			<ToastContainer
				position='bottom-center'
				autoClose={1000}
				closeOnClick
				pauseOnFocusLoss
				draggable
				theme='dark'
			/>
			<RouterProvider router={router} />
		</CartProvider>
	);
}

export default App;
