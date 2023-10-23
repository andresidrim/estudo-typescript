import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/sobre';
import Contato from './pages/contato';
import Produto from './pages/produto';
import NotFound from './pages/notfound';

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
