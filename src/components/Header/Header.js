import React from 'react';
import Logo from '../Logo/Logo';
import UserLogin from '../UserLogin/UserLogin';

const Header = () => {
	return (
		<header className='header'>
			<div className='header__logo'>
				<Logo />
			</div>
			<div className='header__login'>
				<UserLogin />
			</div>
		</header>
	);
};

export default Header;
