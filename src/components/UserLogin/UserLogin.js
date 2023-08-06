import React, { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/userSlice';

const UserLogin = () => {
	const navigate = useNavigate();
	const user = useSelector((state) => state.userSlice.user);
	const dispatch = useDispatch();
	const handleSignIn = (response) => {
		const userInfo = jwtDecode(response.credential);
		dispatch(setUser(userInfo));
		localStorage.setItem('token', response.credential);
		document.getElementById('login').hidden = true;
		navigate('/home');
	};

	const handleSignOut = () => {
		dispatch(setUser({}));
		document.getElementById('login').hidden = false;
		localStorage.removeItem('token');
		navigate('/');
	};
	useEffect(() => {
		const savedToken = localStorage.getItem('token');
		if (savedToken) {
			const userInfo = jwtDecode(savedToken);
			dispatch(setUser(userInfo));
			document.getElementById('login').hidden = true;
		}
		/* global google */
		google.accounts.id.initialize({
			client_id: '525272807317-brm5t1l7sirb22thch7lvgv9tnrq3943.apps.googleusercontent.com',
			callback: handleSignIn,
		});
		google.accounts.id.renderButton(document
			.getElementById('login'), { theme: 'outline', size: 'large' });
	}, []);
	return (
		<div className='userlogin'>
			<div id='login'></div>
			{user && user.picture ? <>
				<div className='avatar_wrapper'>
					<img src={user.picture} alt='avatar' className='avatar' />
				</div>
				<button className='logout-btn' onClick={handleSignOut}>LogOut</button>
			</> : null
			}
		</div>
	);
};

export default UserLogin;
