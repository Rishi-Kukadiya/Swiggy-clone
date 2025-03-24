import { Link } from "react-router";
import Navbar from "./nav";
function Header() {
    return (
        <>
        <Navbar></Navbar>
        <section className="hero-section">
            <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
                alt="Veggies"
                className="hero-img left-img"
            />
            <div className="hero-content">
                <h1>Order food & groceries. Discover best restaurants. Swiggy it!</h1>

                {/* Location Input */}
                <div className="input-group">
                    <i className="bi bi-geo-alt"></i>
                    <input type="text" placeholder="Enter Your delivery location" />
                    <i className="bi bi-chevron-down"></i>
                </div>

                {/* Search Bar */}
                <div className="input-group">
                    <input type="text" placeholder="Search for restaurant, item or more" />
                    <i className="bi bi-search"></i>
                </div>
            </div>
            <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
                alt="Sushi"
                className="hero-img right-img"
            />
        </section>
        <section className="section-container">
            <Link to="/resturant">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png" alt="food_delivery" />
            </Link>
            <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png" alt="instamart" />
            </a>
            <Link to="/dineout">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png" alt="dineout" />
            </Link>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png" alt="Genie" />
        </section>
        </>
    );
}

export default Header;
