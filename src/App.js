import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Confirmation from "./Components/pages/Confirmation";
import BookingPage from "./Components/pages/BookingPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Menu />
      <Footer />
    </Router>
  );
};

export default App;
