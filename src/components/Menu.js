import React, { useState } from 'react';
import { menuData } from '../App';

function Menu({ addToCart }) {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'starters', name: 'Starters' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' }
  ];
  
  const filteredMenu = activeCategory === 'all' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);
  
  return (
    <section id="menu">
      <div className="container">
        <div className="section-title">
          <h2>Our Menu</h2>
          <p>Discover our carefully crafted dishes made with the freshest ingredients</p>
        </div>
        
        <div className="menu-categories">
          {categories.map(category => (
            <button 
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="menu-grid">
          {filteredMenu.map(item => (
            <div key={item.id} className="menu-item">
              <img src={item.image} alt={item.name} />
              <div className="menu-item-content">
                <div className="menu-item-header">
                  <h3 className="menu-item-title">{item.name}</h3>
                  <span className="menu-item-price">${item.price.toFixed(2)}</span>
                </div>
                <p className="menu-item-description">{item.description}</p>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;