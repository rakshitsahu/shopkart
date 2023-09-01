import React from 'react';
import './hero.css';
import Topbar from '../Topbar/Topbar';
import Navbar from '../Navbar/Navbar';
import star from '../../assets/star.svg';
import vector from './vector.png'
const Hero = () => {
  return (
    <div className='hero'>
    <Topbar />
    <Navbar />
    <div className='hero-main'>
      <div className='orange-background'></div>
      <div className='hero-main-background'></div>
      <div className='hero-intro'>
        <h1>
          Fresh <span>2022</span> <span>Look</span>
        </h1>
        
      </div>
      <img src={star} alt='' className='star' />
    </div>
    <div className='see-more'>See more <img src = {vector}/></div>
  </div>
  
  );
};

export default Hero;
