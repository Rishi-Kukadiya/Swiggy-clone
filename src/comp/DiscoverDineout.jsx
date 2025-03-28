import React, { useState } from "react";
import { useParams } from "react-router";
import Navbar from "./nav";
import Footer from "./Footer";
import Scan_to_download from "./scan_to_download";
import { Heart } from "lucide-react";
import Dinedata from "../Utils/Dinedata";
import "../css/resdetail.css";

const RestaurantDetails = () => {
  const { RestID } = useParams();
  console.log("Restaurant ID from URL:", RestID);
  const restaurant = Dinedata.find((rest) => rest.info.id === RestID);

  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
  });

  const [isFavorite, setIsFavorite] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", bookingDetails);
    alert(`Table booked successfully at ${restaurant.info.name}!`);
  };

  if (!restaurant) {
    return (
      <div className="rest-not-found">
        <h2>Restaurant Not Found</h2>
        <p>We couldn't find the restaurant you're looking for.</p>
        <a href="/">Back to Restaurants</a>
      </div>
    );
  }

  const {
    name,
    rating,
    costForTwo,
    cuisines,
    locality,
    locationInfo,
    mediaFiles,
    vendorOffer,
  } = restaurant.info;

  return (
    <div className="rd-container">
      <Navbar />
      <div className="rd-content-grid">
        {mediaFiles.length > 0 && (
          <div className="rd-media">
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${mediaFiles[0].url}`}
              alt={name}
            />
          </div>
        )}

        <div>
          <h1 className="rd-name">{name}</h1>
          <p className="rd-rating">
            Rating: {rating.value} ({rating.count} reviews)
          </p>
          <p className="rd-cost">Cost for Two: {costForTwo}</p>
          <p className="rd-cuisines">Cuisines: {cuisines.join(", ")}</p>
          <p className="rd-location">Location: {locality}, {locationInfo.city.name}</p>

          {vendorOffer?.info && (
            <div className="rd-offer">
              <h4>{vendorOffer.info.header}</h4>
              <p>{vendorOffer.info.description}</p>
            </div>
          )}

          <button
            className="rd-favorite-btn"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart /> {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>

      <form className="rd-booking-form" onSubmit={handleBookingSubmit}>
        <h2>Make a Reservation</h2>
        <label>Name:</label>
        <input type="text" name="name" value={bookingDetails.name} onChange={handleInputChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={bookingDetails.email} onChange={handleInputChange} required />

        <label>Phone:</label>
        <input type="tel" name="phone" value={bookingDetails.phone} onChange={handleInputChange} required />

        <label>Date:</label>
        <input type="date" name="date" value={bookingDetails.date} onChange={handleInputChange} required />

        <label>Time:</label>
        <input type="time" name="time" value={bookingDetails.time} onChange={handleInputChange} required />

        <label>Guests:</label>
        <select name="guests" value={bookingDetails.guests} onChange={handleInputChange}>
          {[...Array(8)].map((_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? "person" : "people"}</option>
          ))}
        </select>

        <button type="submit" className="rd-submit-btn">Confirm Reservation</button>
      </form>

      <Scan_to_download />
      <Footer />
    </div>
  );
};

export default RestaurantDetails;
