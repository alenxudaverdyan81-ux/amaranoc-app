import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import Discounts from "./pages/Discounts";
import Services from "./pages/Services";
import About from "./pages/About";
import Loxavazan from './pages/Loxavazan';
import Zambyux from './pages/zambyux';
import "./style.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const allOffers = [
    { id: 1, location: 'Ապարան', price: '350,000', capacity: 32, image: '...', hasPool: true },
    { id: 2, location: 'Գառնի', price: '45,000', capacity: 6, image: '...', hasPool: false }
  ];

  return (
    <Router>
      <div className="app-wrapper">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/discounts" element={<Discounts searchTerm={searchTerm} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/loxavazan" element={<Loxavazan offers={allOffers} />} />
          <Route path="/zambyux" element={<Zambyux />} />
        </Routes>

        <section className="cta-section">
          <div className="cta-overlay">
            <div className="cta-container">
              <h2>ՏԵՂԱԴՐԵԼ ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ</h2>
              <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Անուն Ազգանուն" required />
                <input type="tel" placeholder="Հեռախոսահամար" required />
                <input type="email" placeholder="Էլ. հասցե" required />
                <button type="submit" className="btn-submit">Ուղարկել</button>
              </form>
            </div>
          </div>
        </section>

        <Footer />

        <div className="sticky-contact-widget">
          <button className="widget-btn"><i className="fa-solid fa-phone"></i></button>
          <button className="widget-btn"><i className="fa-regular fa-envelope"></i></button>
        </div>
      </div>
    </Router>
  );
}