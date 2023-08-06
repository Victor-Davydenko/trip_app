import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const isLoggedIn = useSelector((state) => state.userSlice.isLoggedIn);

	if (isLoggedIn === false) {
		return <Navigate to='/' />;
	}
	if (isLoggedIn) {
		return children;
	}
};

export default PrivateRoute;
