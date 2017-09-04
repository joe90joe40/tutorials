import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
	<ul>
		<li><NavLink exact to="/">Home</NavLink></li>
		<li><NavLink to="/about">About</NavLink></li>
		<li><NavLink to="/topics">Topics</NavLink></li>
	</ul>
);

export default Nav;
