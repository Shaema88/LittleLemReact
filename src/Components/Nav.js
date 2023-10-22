import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<ul className="navBar">
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<Link to="/menu">Menu</Link>
			</li>
			<li>
				<Link to="/reservations">Reservations</Link>
			</li>
		</ul>
	);
};

export default Nav;
