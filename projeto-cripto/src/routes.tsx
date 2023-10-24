import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import NotFound from './pages/notfound/NotFound';

import Layout from './components/layout/Layout';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/detail/:symbol',
				element: <Detail />
			},
			{
				path: '*',
				element: <NotFound />
			}
		]
	}
]);

export { router };
