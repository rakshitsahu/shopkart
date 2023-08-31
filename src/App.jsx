import { useState } from 'react';
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Product from './components/products/Product';

function App() {
  return (
    <>
      <div className='wrapper'>
        <Hero />
        <Product />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
