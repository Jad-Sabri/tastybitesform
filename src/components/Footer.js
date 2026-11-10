import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h4>Tasty Bites</h4>
            <p>Experience the finest culinary delights in a warm and inviting atmosphere.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Reservations</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Contact Info</h4>
            <ul className="footer-links">
              <li><i className="fas fa-map-marker-alt"></i> Beirut, Salim Slem, LIU Street</li>
              <li><i className="fas fa-phone"></i>(+961) 78940016</li>
              <li><i className="fas fa-envelope"></i> info@tastybites.com</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Tasty Bites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;