import React from "react";
import navlogo from "../Assets/Assets/navlogo.png";

const Header = () => {
	return (
		<div>
			<img className="navLogo" src={navlogo} alt="Logo" />
		</div>
	);
};

export default Header;
