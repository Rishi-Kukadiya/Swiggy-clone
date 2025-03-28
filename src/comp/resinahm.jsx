import { useEffect, useState } from "react";
import { GridShimmer } from "./shimming";
import "../css/resinah.css"; // External CSS file

export default function Resinash() {
  const [resdata, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const proxyServer = "https://cors-anywhere.herokuapp.com/";
    const api =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true";

    async function fetchdata() {
      try {
        const data = await fetch(proxyServer + api);
        const res = await data.json();
        setdata(res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      } catch (error) {
        // console.error("Error fetching restaurant data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchdata();
  }, []);

  console.log(resdata)
  return (
    <div className="restaurant-section">
      <h2 className="section-title">Top restaurant chains in Ahmedabad</h2>
      {loading ? (
        <GridShimmer /> // Show shimmer effect while loading
      ) : (
        <div className="restaurant-container">
          {resdata.map((restaurant) => {
            const info = restaurant.info;
            return (
              <div key={info.id} className="restaurant-card">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.cloudinaryImageId}`}
                  alt={info.name}
                  className="restaurant-image"
                />
                <div className="restaurant-info">
                  <h3 className="restaurant-name">{info.name}</h3>
                  <p className="restaurant-cuisine">{info.cuisines.join(", ")}</p>
                  <p className="restaurant-location">
                    {info.locality}, {info.areaName}
                  </p>
                  <p className="restaurant-cost">{info.costForTwo}</p>
                  <div className="restaurant-details">
                    <span className="rating">⭐ {info.avgRating}</span>
                    <span className="delivery-time">{info.sla.slaString}</span>
                  </div>
                  {info.aggregatedDiscountInfoV3 && (
                    <p className="restaurant-discount">
                      {info.aggregatedDiscountInfoV3.header} - {info.aggregatedDiscountInfoV3.subHeader}
                    </p>
                  )}
                  <a href={restaurant.cta.link} target="_blank" rel="noopener noreferrer" className="order-btn">
                    Order Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
