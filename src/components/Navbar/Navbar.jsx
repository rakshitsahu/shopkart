import React , {useState} from 'react';
import mobileMenuImage from './mobile-menu.png';
import './navbar.css';
const Navbar = () => {
  const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
      name: 'Our Products',
      id: 'product',
      child: [
        { name: 'Product 1', id: 'p1' },
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3' },
        { name: 'Product 4', id: 'p4' },
      ],
    },
    { name: 'Contact Us', id: 'contact' },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  const [isNavOpen, setNavOpen] = useState(false);

  const openNav = () => {
    setNavOpen(true);
  };

  const closeNav = () => {
    setNavOpen(false);
  };
  return (
    <>
      <header>
<div className='mobile-menu-icon hide-for-desktop' onClick={toggleMobileMenu}>
  <div className='bar'></div>
  <div className='bar'></div>
  <div className='bar'></div>
</div>
        <h1>Shopkart</h1>
        <ul className='header__list '>
          <li className='header__list-item hide-for-mobile'>Wishlist (0)</li>
          <li className='header__list-item hide-for-mobile'>Bag (0)</li>
          <li onClick={toggleMobileMenu} className='header__list-item hide-for-desktop'><img src={mobileMenuImage} alt="Mobile Menu" /></li>
        </ul>
      </header>

      <div className='horizontal-line'></div>

      <nav className='navbar hide-for-mobile'>
      <ul className='navbar-container'>
        {
          navbar.map((item) => (
          <div key={item.id} >
            <div className='text-with-underline'>{item.name}</div>
            {
              item.child && (
              <ul className='navbar-submenu-container'>
                {item.child.map((childItem) => (
                  <li className='navbar-submenu-item' key={childItem.id}>{childItem.name}</li>
                ))}
              </ul>
            )
          }
          </div>
        ))
      }
      </ul>
    </nav>




<div className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}></div>
<nav className={`mobile-navbar ${isMobileMenuOpen ? 'open' : ''}`}>
  <div className="mobile-navbar-center">
    <ul>
      {navbar.map((item) => (
        <li key={item.id}>
          <div className='text-with-underline'>{item.name}</div>
        </li>
      ))}
    </ul>
  </div>
</nav>





    </>
  );
};

export default Navbar;
