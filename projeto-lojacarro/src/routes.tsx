import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Layout from './components/Layout/Layout';
import SignIn from './pages/SignIn/SignIn';
import Login from './pages/Login/Login';
import CarDetails from './pages/CarDetails/CarDetails';
import Dashboard from './pages/Dashboard/Dashboard';
import RegisterCar from './pages/Dashboard/New/RegisterCar';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/cardetails/:id',
				element: <CarDetails />
			},
			{
				path: '/dashboard',
				element: <Dashboard />
			},
			{
				path: '/dashboard/registercar',
				element: <RegisterCar />
			},
			{
				path: '*',
				element: <NotFound />
			}
		]
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/signin',
		element: <SignIn />
	}
]);

export { router };
