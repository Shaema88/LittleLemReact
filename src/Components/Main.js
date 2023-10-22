import React from "react";
import food from "../Assets/Assets/food.png";

const Main = () => {
	const handleReservationClick = () => {
		// Handle navigation logic here
		window.location.href = "/reservations";
	};

	return (
		<main className="grid-2col">
			<h2 className="hidden">Main</h2>
			<section className="call-to-action">
				<div className="hero-text">
					<h1>Little Lemon Restaurant</h1>
					<h2>Chicago</h2>
					<p className="subsection">
						We are a family-owned Mediterranean restaurant, located on Maldove
						Street in Chicago, Illinois. We focus on traditional recipes served
						with a modern twist.
					</p>
					<br />
					<button className="action-button" onClick={handleReservationClick}>
						Reserve a table
					</button>
				</div>
			</section>

			<section className="call-to-action hero-image">
				<img
					className="hero-img"
					src={food}
					alt="Little Lemon restaurant cuisine"
				/>
			</section>
		</main>
	);
};

export default Main;
