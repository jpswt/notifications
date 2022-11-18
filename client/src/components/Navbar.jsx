import React from 'react';
import './navbar.css';
import Notification from '../assets/notification1.svg';
import Messages from '../assets/message.svg';
import Settings from '../assets/settings.svg';

const Navbar = () => {
	return (
		<div className="navbar">
			<span className="logo">Card App</span>
			<div className="icons">
				<div className="icon">
					<img src={Notification} className="iconImg" alt="" />
					<div className="counter">2</div>
				</div>
				<div className="icon">
					<img src={Messages} className="iconImg" alt="" />
					<div className="counter">2</div>
				</div>
				<div className="icon">
					<img src={Settings} className="iconImg" alt="" />
					<div className="counter">2</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
