import React, { useState } from 'react';
import { useParams } from "react-router";
import Navbar from "./nav";
import Footer from "./Footer";
import Scan_to_download from "./scan_to_download";
import { Star, MapPin, Clock, CreditCard, Tag, ChevronLeft, Heart, Share2, Phone, Utensils } from 'lucide-react';
import Ashreshdata from "../Utils/ahresdata";

const RestaurantDetails = () => {
    const { RestID } = useParams();
    const restaurants = Ashreshdata?.props?.pageProps?.widgetResponse?.success?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const restaurant = restaurants.find(rest => rest.info.id === RestID);
    
    const [bookingDetails, setBookingDetails] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 1
    });
    
    const [activeImage, setActiveImage] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        console.log('Booking submitted:', bookingDetails);
        // Show success message
        alert(`Table booked successfully at ${name}!`);
    };

    if (!restaurant) {
        return (
            <div className="min-h-screen flex items-center justify-center font-nunito bg-gray-50">
                <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Restaurant Not Found</h2>
                    <p className="text-gray-600 mb-6">We couldn't find the restaurant you're looking for.</p>
                    <a href="/" className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                        <ChevronLeft className="mr-2" />
                        Back to Restaurants
                    </a>
                </div>
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
        highlights,
        vendorOffer
    } = restaurant.info;

    return (
        <div className="min-h-screen bg-gray-50 font-nunito">
            <Navbar />
            
            {/* Hero Section */}
            <div className="relative h-96 overflow-hidden">
                {mediaFiles.length > 0 && (
                    <img 
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${mediaFiles[activeImage].url}`}
                        alt={name}
                        className="w-full h-full object-cover transition-opacity duration-500"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="container mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">{name}</h1>
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                <Star className="w-4 h-4 mr-1" />
                                <span className="text-sm font-medium">
                                    {rating.value} ({rating.count})
                                </span>
                            </div>
                            <span className="text-sm font-medium">{costForTwo}</span>
                            <span className="text-sm font-medium">{locationInfo.distanceString}</span>
                        </div>
                        <p className="text-gray-200 max-w-2xl">{cuisines.join(', ')}</p>
                    </div>
                </div>
                
                {/* Image Thumbnails */}
                {mediaFiles.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {mediaFiles.slice(0, 5).map((file, index) => (
                            <button 
                                key={index}
                                onClick={() => setActiveImage(index)}
                                className={`w-12 h-12 rounded-md overflow-hidden border-2 ${activeImage === index ? 'border-white' : 'border-transparent'}`}
                            >
                                <img 
                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${file.url}`}
                                    alt={file.name}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                )}
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-3">
                    <button 
                        onClick={() => setIsFavorite(!isFavorite)}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition"
                    >
                        <Heart className="w-5 h-5 text-white" fill={isFavorite ? "currentColor" : "none"} />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition">
                        <Share2 className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Restaurant Info */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About Section */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-2xl font-bold mb-4 text-gray-800">About {name}</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <MapPin className="w-5 h-5 mt-1 mr-3 text-indigo-600" />
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Location</h3>
                                            <p className="text-gray-600">{locality}, {locationInfo.city.name}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Clock className="w-5 h-5 mt-1 mr-3 text-indigo-600" />
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Distance</h3>
                                            <p className="text-gray-600">{locationInfo.distanceString} away</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <Utensils className="w-5 h-5 mt-1 mr-3 text-indigo-600" />
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Cuisines</h3>
                                            <p className="text-gray-600">{cuisines.join(', ')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <CreditCard className="w-5 h-5 mt-1 mr-3 text-indigo-600" />
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Average Cost</h3>
                                            <p className="text-gray-600">{costForTwo}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Highlights */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-2xl font-bold mb-4 text-gray-800">Highlights</h2>
                            <div className="flex flex-wrap gap-3">
                                {highlights.map((highlight, index) => (
                                    <span 
                                        key={index} 
                                        className="inline-flex items-center px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                                    >
                                        {highlight}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Gallery */}
                        {mediaFiles.length > 0 && (
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h2 className="text-2xl font-bold mb-4 text-gray-800">Gallery</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {mediaFiles.slice(0, 6).map((file, index) => (
                                        <div 
                                            key={index} 
                                            className="aspect-square overflow-hidden rounded-xl hover:shadow-md transition"
                                        >
                                            <img 
                                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${file.url}`}
                                                alt={file.name}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column - Booking Card */}
                    <div className="sticky top-4 h-fit">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            {/* Booking Header */}
                            <div className="bg-indigo-600 p-6 text-white">
                                <h2 className="text-2xl font-bold mb-1">Reserve a Table</h2>
                                <p className="text-indigo-100">Book your dining experience now</p>
                            </div>
                            
                            {/* Booking Form */}
                            <form onSubmit={handleBookingSubmit} className="p-6 space-y-5">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input 
                                            type="text"
                                            name="name"
                                            value={bookingDetails.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                            required
                                            placeholder="Your name"
                                        />
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                            <input 
                                                type="email"
                                                name="email"
                                                value={bookingDetails.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                                required
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                            <input 
                                                type="tel"
                                                name="phone"
                                                value={bookingDetails.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                                required
                                                placeholder="+91 9876543210"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                            <input 
                                                type="date"
                                                name="date"
                                                value={bookingDetails.date}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                                            <input 
                                                type="time"
                                                name="time"
                                                value={bookingDetails.time}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                                        <select
                                            name="guests"
                                            value={bookingDetails.guests}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                        >
                                            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                                <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    className="w-full bg-indigo-600 text-white py-4 rounded-lg hover:bg-indigo-700 transition font-semibold shadow-md hover:shadow-lg"
                                >
                                    Confirm Reservation
                                </button>
                                
                                {vendorOffer && (
                                    <div className="mt-4 p-3 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                                        <div className="flex items-start">
                                            <Tag className="w-5 h-5 mt-0.5 mr-2 text-amber-600" />
                                            <div>
                                                <p className="font-medium text-amber-900">{vendorOffer.info.header}</p>
                                                <p className="text-sm text-amber-800">{vendorOffer.info.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </form>
                            
                            {/* Contact Info */}
                            <div className="border-t border-gray-200 p-6">
                                <h3 className="font-semibold text-gray-800 mb-3">Need help?</h3>
                                <button className="flex items-center justify-center w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                                    <Phone className="w-5 h-5 mr-2 text-indigo-600" />
                                    <span>Contact Restaurant</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Scan_to_download />
            <Footer />
        </div>
    );
};

export default RestaurantDetails;