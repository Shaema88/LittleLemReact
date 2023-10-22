import React from "react";
import HeroImage from "../../Assets/Assets/food5.jpeg";
import { Link } from "react-router-dom";
export default function Confirmation() {
	return (
		<header className="confirmation-header">
			<img
				className="confirmation-image"
				src={HeroImage}
				alt="Little Lemon Ingredients"
			></img>
			<section className="reserve-header-text">
				<h1>Your Reservation is Confirmed!</h1>
				<h4>A confirmation message has been sent to your email.</h4>
				<h4>Thanks for dining with us!</h4>
			</section>

			<section className="redirect-buttons">
				<a
					className="redirect-button"
					href={HeroImage}
					target="_blank"
					rel="noreferrer"
				>
					Browse Menu
				</a>
				<Link className="redirect-button" to="/confirmation">
					Home Page
				</Link>
			</section>
		</header>
	);
}
