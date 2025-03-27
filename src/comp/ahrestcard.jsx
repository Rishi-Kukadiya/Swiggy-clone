import React, { useState, useEffect } from 'react';
import Ashdata from "../Utils/ahresdata";
import "../css/as/Ashcard.css";
import { Link } from 'react-router';
export default function Ashcards() {
    const data = Ashdata?.props?.pageProps?.widgetResponse?.success?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
    // If data is not an array, make it an array for mapping
    const restaurants = Array.isArray(data) ? data : [data];
    
    return (
        <div className="restaurant-cards-container">
            {restaurants
    .filter(restaurant => restaurant?.info?.id)
    .map((restaurant, index) => (
        <Link key={restaurant.info.id} to={`/dineout/booktable/${restaurant.info.id}`}>
            <RestaurantCard restaurant={restaurant.info} />
        </Link>
    ))}
        </div>
    );
}

function RestaurantCard({ restaurant }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    // Auto-rotate images if there are multiple
    useEffect(() => {
        if (!restaurant?.mediaFiles || restaurant.mediaFiles.length <= 1) return;
        
        const interval = setInterval(() => {
            setCurrentImageIndex(prev => 
                prev === restaurant.mediaFiles.length - 1 ? 0 : prev + 1
            );
        }, 3000);
        
        return () => clearInterval(interval);
    }, [restaurant?.mediaFiles]);
    
    if (!restaurant) return null;
    
    return (
        <div className="restaurant-card">
            {/* Image with rotating effect */}
            <div className="card-image-container">
                {restaurant.mediaFiles?.[currentImageIndex]?.url && (
                    <img 
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.mediaFiles[currentImageIndex].url}`} 
                        alt={restaurant.name} 
                        className="card-image"
                    />
                )}
                <div className="image-overlay">
                    <span className="distance">{restaurant.locationInfo?.distanceString}</span>
                </div>
            </div>
            
            {/* Restaurant details */}
            <div className="card-details">
                <div className="restaurant-name-rating">
                    <h3 className="name">{restaurant.name}</h3>
                    <div className="rating">
                        <span className="rating-value">{restaurant.rating?.value}</span>
                        <span className="rating-count">({restaurant.rating?.countDescription || '0 ratings'})</span>
                    </div>
                </div>
                
                <div className="cuisine-cost">
                    <p className="cuisines">{restaurant.cuisines?.join(', ')}</p>
                    <p className="cost">{restaurant.costForTwo}</p>
                </div>
                
                {/* Offers */}
                {restaurant.offerInfoV3 && (
                    <div className="offers-section">
                        <div className="main-offer">
                            <span className="offer-tag">OFFER</span>
                            <span>{restaurant.offerInfoV3.vendorOffer.title}</span>
                        </div>
                        {restaurant.offerInfoV3.couponOffer && (
                            <div className="coupon-offer">
                                <span>{restaurant.offerInfoV3.couponOffer.title}</span>
                            </div>
                        )}
                    </div>
                )}
                
                {/* Highlights */}
                {restaurant.highlights && restaurant.highlights.length > 0 && (
                    <div className="highlights">
                        {restaurant.highlights.map((highlight, i) => (
                            <span key={i} className="highlight-tag">{highlight}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}