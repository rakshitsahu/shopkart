import React from 'react';
import './productCard.css';
import productImageCorner from '../../assets/product-image-corner.svg';

const ProductCard = (props) => {
  return (
    <div className='card'>
      <div className='card-img-container'>
        <img src={props.src} alt='' className='card-img' />
        <img src={productImageCorner} alt='' className='product-image-corner' />
      </div>
      <div className='card-text'>
        <div className='card-heading'>{props.heading}</div>
        <div className='card-paragraph'>{props.paragraph}</div>
        <div className='card-price'>${props.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
