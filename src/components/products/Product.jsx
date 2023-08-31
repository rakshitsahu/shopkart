import { useState, useRef, useEffect } from 'react';
import './product.css';
import leftBrightLine from '../../assets/left-bright-line.svg';
import ProductCard from '../ProductCard/ProductCard';
import leftArrow from '../../assets/left-arrow.svg';
import rightArrow from '../../assets/right-arrow.svg';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState([]);

  //truncate title to a specified length
  const truncateTitle = (title, maxLength) => {
    if (title.length <= maxLength) {
      return title;
    }
    return title.slice(0, maxLength) + '...';
  };

  //truncate description to a specified length
  const truncateDesc = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.slice(0, maxLength) + '...';
  };

  //fetching ALL products
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  //fetching by category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      (async () => {
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${selectedCategory}`
        );
        const filtered = await res.json();
        setFilteredProducts(filtered);
        console.log(filtered);
      })();
    }
  }, [products, selectedCategory]);

  return (
    <>
      <section className='products'>
        <div className='products-top'>
          <h2>New Products</h2>
          <div >
            <img src={leftBrightLine} className='left-star-line' alt='' />
          </div>
          <div className='slider-arrows hide-for-mobile'>
            <img src={leftArrow} alt='' />
            <img src={rightArrow} alt='' />
          </div>
        </div>
        <div className='products-bottom'>
          <div className='category-sidebar '>
            <ul>
              <li
                onClick={() => setSelectedCategory('electronics')}
                className={selectedCategory === 'electronics' ? 'active' : ''}
              >
                Apparel
              </li>
              <li
                onClick={() => setSelectedCategory('All')}
                className={selectedCategory === 'All' ? 'active' : ''}
              >
                Accessories
              </li>
              <li
                onClick={() => setSelectedCategory('jewelery')}
                className={selectedCategory === 'jewelery' ? 'active' : ''}
              >
                Best Sellers
              </li>
              <li
                onClick={() => setSelectedCategory("men's clothing")}
                className={
                  selectedCategory === "men's clothing" ? 'active' : ''
                }
              >
                50% off
              </li>
            </ul>
          </div>
          <div className='products-carousel '>
            {filteredProducts.map((values) => {
              return (
                <ProductCard
                  key={values.id}
                  src={values.image}
                  heading={truncateTitle(values.title, 40)}
                  paragraph={truncateDesc(values.description, 100)}
                  price={values.price}
                />
              );
            })}
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Product;
