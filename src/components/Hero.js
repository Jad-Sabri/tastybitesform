import React from 'react';

function Hero({ setCurrentPage }) {
  return (
    <section className="hero">
      <div className="container">
        <h1>Experience Culinary Excellence</h1>
        <p>At Tasty Bites, we craft unforgettable dining experiences with the finest ingredients and passionate culinary artistry.</p>
        <button className="btn" onClick={() => setCurrentPage('menu')}>View Our Menu</button>
      </div>
    </section>
  );
}

export default Hero;