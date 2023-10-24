import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import NotFound from './pages/notfound/NotFound';

const router = createBrowserRouter([
	{
		children: [
			{
				path: '/',
				element: <Home />
			}
		]
	}
]);

export { router };
