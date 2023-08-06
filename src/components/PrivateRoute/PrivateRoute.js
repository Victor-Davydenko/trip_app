import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const { user } = useSelector((state) => state.userSlice);
	if (!Object.keys(user).length) {
		return <Navigate to='/' />;
	}
	return children;
};

export default PrivateRoute;
