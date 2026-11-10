import React from 'react';

function Header({ cartCount, currentPage, setCurrentPage }) {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <i className="fas fa-utensils"></i>
            <span>Tasty Bites</span>
          </div>
          
          <nav>
            <ul>
              <li><a className={currentPage === 'home' ? 'active' : ''} onClick={() => setCurrentPage('home')}>Home</a></li>
              <li><a className={currentPage === 'menu' ? 'active' : ''} onClick={() => setCurrentPage('menu')}>Menu</a></li>
              <li><a className={currentPage === 'about' ? 'active' : ''} onClick={() => setCurrentPage('about')}>About</a></li>
              <li><a className={currentPage === 'reservations' ? 'active' : ''} onClick={() => setCurrentPage('reservations')}>Reservations</a></li>
              <li><a className={currentPage === 'contact' ? 'active' : ''} onClick={() => setCurrentPage('contact')}>Contact</a></li>
            </ul>
          </nav>
          
          <div className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;