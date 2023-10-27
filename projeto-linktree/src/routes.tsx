import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';
import SocialMedia from './pages/SocialMedia/SocialMedia';
import NotFound from './pages/NotFound/NotFound';
import Private from './routes/Private';

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
		element: (
			<Private>
				<Admin />
			</Private>
		)
	},
	{
		path: '/admin/social',
		element: (
			<Private>
				<SocialMedia />
			</Private>
		)
	},
	{
		path: '*',
		element: <NotFound />
	}
]);

export { router };
