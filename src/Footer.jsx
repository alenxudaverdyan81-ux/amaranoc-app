import React from 'react';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <h2>ԿՈՆՏԱԿՏՆԵՐ</h2>
        <div className="footer-contacts">
          <span><i className="fa-solid fa-phone"></i> 041-611-611 / 044-611-611</span>
          <span><i className="fa-regular fa-envelope"></i> amaranoc.info@gmail.com</span>
          <span><i className="fa-brands fa-instagram"></i> amaranoc.am</span>
          <span><i className="fa-brands fa-facebook-f"></i> amaranoc.am</span>
          <span><i className="fa-solid fa-location-dot"></i> Թումանյան 5</span>
        </div>
        <div className="footer-bottom">
          <a href="#" className="privacy-link">Գաղտնիության քաղաքականություն</a>
          <p className="copyright">Ամարանոց ՍՊԸ | Amaranoc LLC | Амараног ООО</p>
        </div>
      </div>
    </footer>
  );
}