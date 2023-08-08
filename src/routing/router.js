import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Layout from '../components/Layout/Layout';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				element: <Login />,
				index: true,
			},
			{
				path: 'home',
				element: <PrivateRoute><Home /></PrivateRoute>,
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
]);

export default router;
