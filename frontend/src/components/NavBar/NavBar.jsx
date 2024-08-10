import { Link } from "react-router-dom";
import "./navBar.css";
function NavBar() {
    return ( 
        <div>
        <div className="navBar">
            <div className="search-container">
                <input type="text" name="search" placeholder="Search..." className="search-input"/>
                <a href="#" className="search-btn">
                <i className="fas fa-search"></i>      
                </a>
            </div>
            <div className="navBar-notiNewStock">
                <div className="navBar-newStock">
                    <Link to="/form">
                        <button className="newStock-button">New Stock</button>
                    </Link>
                </div>
                <div className="navBar-notificaton">
                <i className="fa-regular fa-bell"></i>
                </div>
            </div>
        </div>
        <div class="navbar-spacer"></div>
        </div>
     );
}

export default NavBar;