import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Layout from '../components/Layout/Layout';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

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
		],
	},
]);

export default router;
