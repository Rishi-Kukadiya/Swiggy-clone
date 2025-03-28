import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';
import Navbar from './nav';
import Footer from './Footer';
import Scan_to_download from './scan_to_download';
import "../css/AddToCart.css";

const AddToCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <Navbar />
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-image-container">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="item-image"
                  onError={(e) => {
                    e.target.src = '/images/food-placeholder.jpg'; // Fallback image
                  }}
                />
              </div>
              <div className="item-details">
                <span className="item-name">{item.name}</span>
                <span className="item-price">₹{item.price}</span>
              </div>
              <div className="quantity-control">
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              </div>
              <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          ))}
          <div className="cart-summary">
            <h3 className="total-price">Total: ₹{totalPrice}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
      <Scan_to_download/>
      <Footer />
    </div>
  );
};

export default AddToCart;



