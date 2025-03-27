import {Link} from 'react-router';
export default function Navbar(){
    return(
        <>
          <header className="header">
            <div className="logo">
                <img 
                    src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" 
                    alt="Swiggy Logo"
                />
            </div>
            <nav className="nav-links">
                <a href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a>
                <a href="https://partner.swiggy.com/login#/swiggy" target="_blank">Partner with us</a>
                <a href="#" className="app-link">
                    Get the app <i className="bi bi-arrow-up-right-circle-fill"></i>
                </a>
                <Link to="/Signup">
          <button  className="sign-in-btn">
            Sign in
          </button>
        </Link>
            </nav>
        </header>
        </>
    )
}