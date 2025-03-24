// ShimmerEffect.jsx
import React from 'react';
import '../css/shimming.css'; // We'll create this CSS file separately

// Base Shimmer Component - highly reusable
const Shimmer = ({ width = '100%', height = '16px', className = '', style = {} }) => {
  return (
    <div 
      className={`shimmer-element ${className}`}
      style={{
        width,
        height,
        ...style
      }}
    ></div>
  );
};

// Commonly used shimmer layouts

// Card Shimmer - for product or restaurant cards
export const CardShimmer = ({ className = '' }) => {
  return (
    <div className={`shimmer-card ${className}`}>
      <Shimmer className="shimmer-image" height="180px" />
      <Shimmer className="shimmer-title" width="70%" height="24px" />
      <Shimmer className="shimmer-text" width="90%" />
      <Shimmer className="shimmer-text" width="60%" />
      <div className="shimmer-footer">
        <Shimmer width="30%" height="20px" />
        <Shimmer width="20%" height="20px" />
      </div>
    </div>
  );
};

// List Item Shimmer - for items in a list
export const ListItemShimmer = ({ className = '' }) => {
  return (
    <div className={`shimmer-list-item ${className}`}>
      <Shimmer className="shimmer-avatar" width="50px" height="50px" style={{ borderRadius: '50%' }} />
      <div className="shimmer-content">
        <Shimmer className="shimmer-title" width="60%" height="20px" />
        <Shimmer className="shimmer-text" width="80%" />
      </div>
    </div>
  );
};

// Detail Shimmer - for detail pages
export const DetailShimmer = ({ className = '' }) => {
  return (
    <div className={`shimmer-detail ${className}`}>
      <Shimmer className="shimmer-header" height="32px" width="50%" />
      <div className="shimmer-layout">
        <Shimmer className="shimmer-image-large" height="280px" />
        <div className="shimmer-content-area">
          <Shimmer className="shimmer-title-large" height="28px" width="80%" />
          <Shimmer className="shimmer-text" width="60%" />
          <Shimmer className="shimmer-text" width="90%" />
          <Shimmer className="shimmer-text" width="75%" />
          <div className="shimmer-actions">
            <Shimmer width="120px" height="36px" />
            <Shimmer width="120px" height="36px" />
          </div>
        </div>
      </div>
      <div className="shimmer-section">
        <Shimmer className="shimmer-subtitle" height="24px" width="30%" />
        <Shimmer className="shimmer-text" />
        <Shimmer className="shimmer-text" width="90%" />
        <Shimmer className="shimmer-text" />
      </div>
    </div>
  );
};

// Grid Shimmer - creates a grid of card shimmers
export const GridShimmer = ({ count = 8, className = '' }) => {
  return (
    <div className={`shimmer-grid ${className}`}>
      {Array(count).fill().map((_, index) => (
        <CardShimmer key={index} />
      ))}
    </div>
  );
};

export default Shimmer;