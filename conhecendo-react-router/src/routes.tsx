import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/sobre/About';
import Contato from './pages/contato/Contato';
import Produto from './pages/produto/Produto';
import NotFound from './pages/notfound/NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: '/contato',
		element: <Contato />
	},
	{
		path: '/produto/:productname',
		element: <Produto />
	},
	{
		path: '*',
		element: <NotFound />
	}
]);

export { router };
