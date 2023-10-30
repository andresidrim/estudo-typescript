import { createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/cart',
				element: <Cart />
			}
		]
	}
]);

export { router };
