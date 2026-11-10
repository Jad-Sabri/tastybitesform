import React from 'react';

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
          <p>Learn more about our story and what makes us special</p>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Tasty Bites Restaurant" />
          </div>
          <div className="about-text">
            <h3>Our Culinary Journey</h3>
            <p>Founded in 2025, Tasty Bites has been serving the community of Lebanon with passion and dedication. Our chefs combine traditional techniques with innovative approaches to create dishes that delight the senses.</p>
            <p>We source our ingredients from local farmers and suppliers who share our commitment to quality and sustainability. Every dish tells a story of craftsmanship and care.</p>
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;