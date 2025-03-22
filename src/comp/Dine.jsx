import React, { useRef } from "react";
import { dineoutRestaurants } from "../Utils/Dinedata";
import "../css/dine.css"; 

export default function Dine() {
  const scrollContainerRef = useRef(null);

  // Handle horizontal scroll with buttons
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 600;
      const newScrollPosition = direction === "left" 
        ? scrollContainerRef.current.scrollLeft - scrollAmount 
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="dineout-section">
      <h1 className="dineout-heading">Discover best restaurants on Dineout</h1>
      
      <div className="carousel-container">
        <button 
          onClick={() => scroll("left")}
          className="scroll-button scroll-left"
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <div ref={scrollContainerRef} className="restaurant-carousel">
          {dineoutRestaurants.map((dine) => (
            <div key={dine.info.id} className="restaurant-card">
              {/* Image and badges section */}
              <div className="card-image-container">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${dine?.info?.mediaFiles[0]?.url}`}
                  alt={dine.info.name}
                  className="card-image"
                />
                
                {/* Rating badge */}
                <div className="rating-badge">
                  <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>{dine.info.rating.value}</span>
                </div>
                
                {/* Ribbon if exists */}
                {dine.info.ribbon && dine.info.ribbon.length > 0 && (
                  <div className="ribbon">
                    {dine.info.ribbon[0].text}
                  </div>
                )}
                
                {/* Hover overlay */}
                <div className="card-overlay">
                  <div className="view-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Card content */}
              <div className="card-content">
                <h3 className="restaurant-name">{dine.info.name}</h3>
                
                <p className="cuisine-types">
                  {dine.info.cuisines?.join(", ")}
                </p>
                
                <div className="price-distance">
                  <span className="price">{dine.info.costForTwo}</span>
                  <span className="distance">{dine.info.locationInfo?.distanceString || ""}</span>
                </div>
                
                <p className="location">
                  {dine.info.locality || dine.info.locationInfo?.formattedAddress}
                </p>
                
                {/* Features */}
                <div className="features">
                  {dine.info.vendorHighlights?.slice(0, 2).map((highlight, index) => (
                    <div key={index} className="feature-tag">
                      {highlight.logo?.logo && (
                        <img 
                          src={`https://media-assets.swiggy.com/swiggy/image/upload/${highlight.logo.logo}`} 
                          alt=""
                          className="feature-icon"
                        />
                      )}
                      <span>{highlight.title}</span>
                    </div>
                  ))}
                </div>
                
                {/* Offers */}
                <div className="offers">
                  {dine.info.offerInfoV3?.vendorOffer && (
                    <div className="primary-offer">
                      <div>
                        <p className="offer-title">{dine.info.offerInfoV3.vendorOffer.title}</p>
                        <p className="offer-subtitle">{dine.info.offerInfoV3.vendorOffer.subtitle}</p>
                      </div>
                      {dine.info.offerInfoV3.vendorOffer.subtext && (
                        <span className="more-offers">{dine.info.offerInfoV3.vendorOffer.subtext}</span>
                      )}
                    </div>
                  )}
                  
                  <div className="secondary-offer">
                    <p>Up to 10% off with bank offers</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => scroll("right")}
          className="scroll-button scroll-right"
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
}