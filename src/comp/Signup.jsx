import React, { useState } from 'react';
import '../css/signup.css';

export default function AuthPanel({ onClose }) {
  const [activeTab, setActiveTab] = useState('login');
  const [loginPhone, setLoginPhone] = useState('');
  const [signupData, setSignupData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateLogin = () => {
    const newErrors = {};
    if (!loginPhone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\d{10}$/.test(loginPhone)) newErrors.phone = 'Invalid phone (10 digits)';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateSignup = () => {
    const newErrors = {};
    if (!signupData.name.trim()) newErrors.name = 'Name is required';
    if (!signupData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupData.email)) newErrors.email = 'Invalid email';
    if (!signupData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\d{10}$/.test(signupData.phone)) newErrors.phone = 'Invalid phone (10 digits)';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateLogin()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      alert(`OTP sent to ${loginPhone}`);
      setLoginPhone('');
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!validateSignup()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      alert(`Account created for ${signupData.name}`);
      setSignupData({ name: '', email: '', phone: '' });
      setActiveTab('login');
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-panel" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>

        <div className="auth-tabs">
          <button className={activeTab === 'login' ? 'active' : ''} onClick={() => setActiveTab('login')}>Login</button>
          <button className={activeTab === 'signup' ? 'active' : ''} onClick={() => setActiveTab('signup')}>Sign Up</button>
        </div>

        {activeTab === 'login' ? (
          <form onSubmit={handleLogin} className="auth-form">
            <label>Phone Number</label>
            <input type="tel" value={loginPhone} onChange={(e) => setLoginPhone(e.target.value)} placeholder="Enter 10-digit phone" />
            {errors.phone && <span className="error-msg">{errors.phone}</span>}
            <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending OTP...' : 'Request OTP'}</button>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="auth-form">
            <label>Name</label>
            <input type="text" value={signupData.name} onChange={(e) => setSignupData({ ...signupData, name: e.target.value })} placeholder="Your name" />
            {errors.name && <span className="error-msg">{errors.name}</span>}
            
            <label>Email</label>
            <input type="email" value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} placeholder="Your email" />
            {errors.email && <span className="error-msg">{errors.email}</span>}
            
            <label>Phone Number</label>
            <input type="tel" value={signupData.phone} onChange={(e) => setSignupData({ ...signupData, phone: e.target.value })} placeholder="10-digit phone" />
            {errors.phone && <span className="error-msg">{errors.phone}</span>}

            <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Creating Account...' : 'Sign Up'}</button>
          </form>
        )}
      </div>
    </div>
  );
}
