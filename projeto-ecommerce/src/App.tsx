import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { router } from './routes';
import CartProvider from './contexts/CartContext';

function App() {
	return (
		<CartProvider>
			<Toaster position='bottom-center' reverseOrder={false} />
			<RouterProvider router={router} />
		</CartProvider>
	);
}

export default App;
