import React, { useEffect } from 'react';

const Login = () => {
	const handleSignIn = (response) => {
		console.log(response);
	};
	useEffect(() => {
		/* global google */
		google.accounts.id.initialize({
			client_id: '24231810214-h3h28cnefvc9aqfnthlb6643f8ddqq9v.apps.googleusercontent.com',
			callback: handleSignIn,
		});
		google.accounts.id.renderButton(document
			.getElementById('login'), { theme: 'outline', size: 'large' });
	}, []);
	return (
		<div>
           	<div id='login'></div>
		</div>
	);
};

export default Login;
