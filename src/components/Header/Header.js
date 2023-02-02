import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../images/anon_m.png';
import logo from '../../images/logo.png'

import './Header.scss';

const Header = () => {
	return (
		<div className="header">
			<Link to="/">
				<div className="logo">
                <img src={logo} alt="user" />
                    kinopub
                </div>
			</Link>
			<div className="user-image">
				<img src={user} alt="user" />
			</div>
		</div>
	);
};

export default Header;
