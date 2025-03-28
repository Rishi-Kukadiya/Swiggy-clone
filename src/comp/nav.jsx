import React, { useState } from 'react';
import AuthPanel from './Signup';
import { Link } from 'react-router';

export default function Navbar() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo">
          <img 
            src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" 
            alt="Swiggy Logo" 
          />
        </div>
        <nav className="nav-links">
          <a href="https://www.swiggy.com/corporate/" target="_blank" rel="noopener noreferrer">Swiggy Corporate</a>
          <a href="https://partner.swiggy.com/login#/swiggy" target="_blank" rel="noopener noreferrer">Partner with us</a>
          <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader" target="_blank" className="app-link">
            Get the app <i className="bi bi-arrow-up-right-circle-fill"></i>
          </a>
          <Link className='cart'
            to="/cart" 
          >
            Go to Cart
          </Link>
          <button onClick={() => setIsAuthOpen(true)} className="sign-in-btn">
            Sign in
          </button>
        </nav>
      </header>
      {isAuthOpen && <AuthPanel onClose={() => setIsAuthOpen(false)} />} 
    </>
  );
}