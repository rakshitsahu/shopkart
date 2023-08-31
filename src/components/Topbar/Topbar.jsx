import React from 'react';
import './topbar.css';
import deliveryIcon from '../../assets/delivery-icon.svg';
import facebookIcon from '../../assets/facebook-icon.svg';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';
import twitterIcon from '../../assets/twitter-icon.svg';

const Topbar = () => {
  return (
    <>
      <div className='topbar'>
        <div className='topbar__menu'>
          <ul className='topbar__list topbar__list-left'>
            <li className='topbar__list-item'>
              <img
                src={deliveryIcon}
                alt='Free delivery icon'
                className='free-delivery-img'
              />
            </li>
            <li className='topbar__list-item'>Free Delivery</li>
            <li class='line'></li>
            <li className='topbar__list-item'>
              <a href='#' className='topbar__link'>
                Return Policy
              </a>
            </li>
          </ul>
          <ul className='topbar__list topbar__list-right'>
            <li>
              <a href='#'>Login</a>
            </li>
            <li>Follow Us</li>
            <li>
              <a href='#'>
                <img
                  src={facebookIcon}
                  alt='facebook icon'
                  className='social-img'
                />
              </a>
            </li>
            <li>
              <a href='#'>
                <img
                  src={linkedinIcon}
                  alt='linked in icon'
                  className='social-img'
                />
              </a>
            </li>
            <li>
              <a href='#'>
                <img
                  src={twitterIcon}
                  alt='twitter icon'
                  className='social-img'
                />
              </a>
            </li>
            <li>
              <a href='#'>
                <img
                  src={instagramIcon}
                  alt='instagram icon'
                  className='social-img'
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Topbar;
