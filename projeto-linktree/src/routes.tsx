import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';
import SocialMedia from './pages/SocialMedia/SocialMedia';
import NotFound from './pages/NotFound/NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/admin',
		element: <Admin />
	},
	{
		path: '/admin/social',
		element: <SocialMedia />
	},
	{
		path: '*',
		element: <NotFound />
	}
]);

export { router };
