import { imageGridCards } from "../Utils/Fooddata";
import "../css/food.css"

export default function Food() {
    return (
        <div className="foody">
        <div className="food-container">
            {imageGridCards.map((food) => (
                <div key={food.id} className="food-item1">
                    <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/${food?.imageId}`}
                        alt="Food Item"
                    />
                </div>  
            ))}
        </div>
        </div>
    );
}
