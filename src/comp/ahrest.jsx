import '../css/as/Ahrest.css';
import ahresdata from "../Utils/ahresdata";

export default function Ahrest() {
  const cardData = ahresdata?.props?.pageProps?.widgetResponse?.success?.cards?.[0]?.card?.card;
  const imageId = cardData?.imageId;
  const title = "Explore Top Dining Out";
  const title1 = "Restaurants in Ahmedabad";

  return (
    <div className="ahrest-container">
      <div className="ahrest-image-container">
        {imageId ? (
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${imageId}`}
            alt="Restaurant Banner"
            className="ahrest-image"
            onError={(e) => {
              e.target.onerror = null;  
              e.target.src = '';
            }}
          />
        ) : (
          <div className="ahrest-placeholder">
            Image not available
          </div>
        )}

        <div className="ahrest-text-overlay">
          <h1 className="ahrest-title h14">{title}</h1>
          <h1 className='ahrest-title'>{title1}</h1>
        </div>
      </div>
    </div>
  );
}