import React from "react";
import footerlogo from "../Assets/Assets/footerlogo.png";

const Footer = () => {
	return (
		<footer className="footer-container">
			<menu>
				<ul className="grid-container">
					<li className="grid-item footer">
						<div className="img-footer">
							<img src={footerlogo} alt="Little Lemon logo" />
						</div>
					</li>
					<li className="grid-item column-2">
						<h1 className="footer-header">Navigation</h1>
						<ul className="footer-links">
							<li>
								<a href="#Home">Home</a>
							</li>
							<li>
								<a href="#About">About</a>
							</li>
							<li>
								<a
									href="../assets/menu.webp"
									target="_blank"
									rel="noopener noreferrer"
								>
									Menu
								</a>
							</li>
							<li>
								<a href="#reservations">Reservations</a>
							</li>
							<li>
								<a href="#Order">Order</a>
							</li>
							<li>
								<a href="#Login">Login</a>
							</li>
						</ul>
					</li>
					<li className="grid-item column-3">
						<h1 className="footer-header">Contact</h1>
						<ul className="footer-links">
							<li>2395 Maldove Way,</li>
							<li>Chicago Illinois</li>
							<li>(629)-243-6827</li>
							<li>
								<a
									href="mailto:info@littlelemon.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									info@littlelemon.com
								</a>
							</li>
						</ul>
					</li>
					<li className="grid-item column-4">
						<h1 className="footer-header">Connect</h1>
						<ul className="footer-links">
							<li>
								<a
									href="https://www.facebook.com/thelittlelemonshop/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Facebook
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/littlelemonmoon/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Instagram
								</a>
							</li>
							<li>
								<a
									href="https://www.youtube.com/watch?v=3Li-FfypZYE"
									target="_blank"
									rel="noopener noreferrer"
								>
									Join us!
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</menu>
		</footer>
	);
};

export default Footer;
