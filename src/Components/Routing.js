import { browserRouter as Routes, Switch } from "react-router-dom";
import React from "react";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Reservation from "./pages/BookingPage";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Confirmation from "./pages/Confirmation";

export default function Routing() {
	return (
		<switch>
			<Route path="/" element={<Homepage />} />

			<Route path="/about" element={<About />} />

			<Route path="/reservations" element={<Reservation />} />

			<Route path="/order" element={<Order />} />

			<Route path="/login" element={<Login />} />

			<Route path="/confirmation" element={<Confirmation />} />
		</switch>
	);
}
