import { createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Product from './pages/Product/Product';
import NotFound from './pages/NotFound/NotFound';

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
			},
			{
				path: '/product/:id',
				element: <Product />
			},
			{
				path: '*',
				element: <NotFound />
			}
		]
	}
]);

export { router };
