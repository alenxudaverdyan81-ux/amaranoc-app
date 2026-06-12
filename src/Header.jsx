import React from 'react';
import { Link } from 'react-router-dom';
import useCartStore from './pages/useCartStore';

export default function Header({ searchTerm, setSearchTerm }) {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <header className="main-header">
      <div className="header-container container">
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>
            AMARANOC.AM
          </Link>
        </div>
        
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Գլխավոր</Link>
          <Link to="/discounts" className="nav-link">Զեղչեր</Link>
          <Link to="/services" className="nav-link">Ծառայություններ</Link>
          <Link to="/about" className="nav-link">Մեր մասին</Link>
          <Link to="/zambyux" className="nav-link" style={{ fontWeight: 'bold' }}>
            🛒 Զամբյուղ ({cartItems.length})
          </Link>
        </nav>

        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Որոնում..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
      </div>
    </header>
  );
}