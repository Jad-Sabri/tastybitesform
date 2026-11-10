import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Reservations from './components/Reservations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

// Menu Data
export const menuData = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with melted cheese, fresh lettuce, tomato, and our special sauce",
    price: 12.99,
    category: "mains",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Thin crust pizza with fresh tomatoes, mozzarella, and basil leaves",
    price: 14.99,
    category: "mains",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with parmesan, croutons, and our homemade Caesar dressing",
    price: 9.99,
    category: "starters",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
    price: 7.99,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  
  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };
  
  const cartCount = cart.length;
  
  const renderPage = () => {
    switch(currentPage) {
      case 'menu':
        return <Menu addToCart={addToCart} />;
      case 'about':
        return <About />;
      case 'reservations':
        return <Reservations />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero setCurrentPage={setCurrentPage} />;
    }
  };
  
  return (
    <div className="app">
      <Header 
        cartCount={cartCount} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;