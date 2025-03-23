import { useEffect, useState } from "react";
import "../css/mindfood.css"; // Import the CSS file

export default function Mindfood() {
  const [mfood, setFood] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const proxyServer = "https://cors-anywhere.herokuapp.com/";
    const api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true";
    
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(proxyServer + api);
        const text = await response.json();
        setFood(text?.data?.cards?.[0]?.card?.card || {});
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);

  return (
    <div className="mindfood-section">
      <div className="mindfood-container">
        <div className="mindfood-header">
          <h2>{mfood?.header?.title || "Discover Food Inspirations"}</h2>
          <p className="mindfood-subtitle">Explore trending cuisines to satisfy your cravings</p>
        </div>
        
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Finding delicious options for you...</p>
          </div>
        ) : (
          <div className="food-list-container">
            <div className="food-list">
              {mfood?.imageGridCards?.info?.map((item) => (
                <div className="food-item" key={item.id}>
                  <div className="food-image-container">
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
                      alt={item.accessibility?.altText || "Food Item"}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}