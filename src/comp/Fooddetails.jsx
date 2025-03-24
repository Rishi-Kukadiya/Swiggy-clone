import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "./nav";
import { GridShimmer } from "./shimming";
import Footer from "./Footer";
import Scan from "./scan_to_download";
import "../css/fooddetails.css";

export default function Fooddetails() {
  const { collectionId } = useParams();
  const [fooddata, setFooddata] = useState(null);
  const [loading, setLoading] = useState(true);

  const proxyServer = "https://cors-anywhere.herokuapp.com/";
  const API_URL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&collection=${collectionId}&tags=layout_CCS_Poha&sortBy=&filters=&type=rcv2&offset=0&page_type=null`;

  useEffect(() => {
    async function fetchdata() {
      setLoading(true);
      try {
        const response = await fetch(proxyServer + API_URL);
        const data = await response.json();
        setFooddata(data.data.cards);
      } catch (error) {
        // console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => setLoading(false), 300);
      }
    }
    fetchdata();
  }, [collectionId]);

  const getRatingClass = (rating) => {
    if (rating >= 4) return "good";
    if (rating >= 3) return "average";
    return "poor";
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="fd-container">
          <GridShimmer />
        </div>
      </>
    );
  }

  if (!fooddata || fooddata.length === 0) {
    return (
      <>
        <Navbar />
        <div className="fd-container flex flex-col items-center justify-center h-80 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg p-8 border border-gray-300 mt-5 mb-5">
  <div className="text-center animate-fadeIn">
    <div className="text-6xl mb-4 animate-bounce">🍽️</div>
    <h2 className="text-3xl font-bold text-gray-900">Oops! No Restaurants Found</h2>
    <p className="text-gray-600 mt-2 leading-relaxed max-w-md">
      We couldn't find any restaurants in this collection at the moment. 
      You might want to explore other options or refresh the page.
    </p>
    <button 
      className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 p-5"
      onClick={() => window.location.reload()}
    >
       Refresh Page
    </button>
  </div>
</div>

        <Scan></Scan>
        <Footer></Footer>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="fd-container">
        <div className="fd-collection-header">
          <h1 className="fd-collection-title">
            {fooddata[0]?.card?.card?.title || "Food Collection"}
          </h1>
          <h2 className="fd-collection-subtitle">
            {fooddata[0]?.card?.card?.description || ""}
          </h2>
          {fooddata[0]?.card?.card?.imageId && (
            <img
              className="fd-collection-banner"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${fooddata[0].card.card.imageId}`}
              alt={fooddata[0].card.card.title}
              loading="lazy"
            />
          )}
        </div>

        <h3 className="fd-section-title">
          {fooddata[2]?.card?.card?.gridElements?.infoWithStyle?.text ||
            "Restaurants"}
        </h3>

        <div className="fd-grid-container">
          {fooddata?.slice(3)?.map(
            (restaurant, index) =>
              restaurant?.card?.card?.info && (
                <div
                  key={`${restaurant.card.card.info.id || index}`}
                  className="fd-restaurant-card"
                >
                  <div className="fd-restaurant-image-container">
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/${restaurant.card.card.info.cloudinaryImageId}`}
                      alt={restaurant.card.card.info.name}
                      className="fd-restaurant-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="fd-restaurant-details">
                    <h2 className="fd-restaurant-title">
                      {restaurant.card.card.info.name}
                    </h2>
                    <p className="fd-restaurant-description">
                      {restaurant.card.card.info.cuisines?.join(", ") || ""}
                    </p>

                    <div className="fd-restaurant-meta">
                      <div
                        className={`fd-rating-badge ${getRatingClass(
                          restaurant.card.card.info.avgRating
                        )}`}
                      >
                        ⭐ {restaurant.card.card.info.avgRating}
                        <span className="fd-total-ratings">
                          (
                          {restaurant.card.card.info.totalRatingsString?.split(
                            " "
                          )[0] || "0+"}
                          )
                        </span>
                      </div>
                      <div className="fd-restaurant-cost">
                        {restaurant.card.card.info.costForTwo}
                      </div>
                    </div>

                    <div className="fd-restaurant-info">
                      <p className="fd-restaurant-location">
                        📍 {restaurant.card.card.info.areaName},{" "}
                        {restaurant.card.card.info.locality}
                      </p>
                      <p className="fd-restaurant-delivery">
                        🚴 {restaurant.card.card.info.sla?.slaString} |{" "}
                        {restaurant.card.card.info.sla?.lastMileTravelString}
                      </p>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <Scan></Scan>
      <Footer></Footer>
    </>
  );
}
