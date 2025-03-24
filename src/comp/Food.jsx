import { imageGridCards } from "../Utils/Fooddata";
import "../css/food.css";
import { Link } from "react-router"; 

export default function Food() {
    return (
        <div className="foody">
            <div className="food-container">
                {imageGridCards.map((food) => {
                    const collectionId = food.action.link.match(/collection_id=(\d+)/)?.[1];

                    return (
                        <Link to={`/fooddetails/${collectionId}`} key={food.id}>
                            <div className="food-item1">
                                <img
                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${food?.imageId}`}
                                    alt="Food Item"
                                />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
