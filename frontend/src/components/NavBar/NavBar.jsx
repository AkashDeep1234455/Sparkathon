import { Link, useNavigate } from "react-router-dom";
import "./navBar.css";
import NotificationPanel from "../NotiPanel/NotificationPanel.jsx";
import { useState, useEffect } from "react";
import axios from 'axios';

function NavBar({setSearchData}) {
    const [opacity, setOpacity] = useState(0);
    const [notificationCount, setNotificationCount] = useState(0);
    const [searchInput,setsearchInput] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNotifications = () => {
            axios.get("http://localhost:8080/getMessages")
                .then((res) => {
                    if(res.data.data.length>0){
                    setNotificationCount(res.data.data.length);
                    } // Update the notification count
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        fetchNotifications(); // Fetch notifications on component mount

        const intervalId = setInterval(fetchNotifications, 5000); // Polling every 5 seconds

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    const changeNoti = () => {
        setOpacity(prevOpacity => (prevOpacity === 0 ? 1 : 0));
    };

    const searchSubmitHandler = (event) => {
        event.preventDefault();
        axios.get("http://localhost:8080/getProduct", { params: { query: searchInput } })
            .then((res) => {
                console.log(res.data.product);
            setSearchData(res.data.product);
            navigate("/search"); 
            setsearchInput("");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    

    const searchChangeHandler = (event)=>{
        setsearchInput(event.target.value)
    }

    return (
        <div>
            <div className="navBar">
                <form action="" onSubmit={searchSubmitHandler}>
                <div className="search-container">
                    <input type="text" name="searchInput" placeholder="Search..." className="search-input" value={searchInput} onChange={searchChangeHandler}/>
                    <a href="#" className="search-btn">
                        <i className="fas fa-search"></i>
                    </a>
                </div>
                </form>
                <div className="navBar-notiNewStock">
                    <div className="navBar-newStock">
                        <Link to="/form">
                            <button className="newStock-button">New Stock</button>
                        </Link>
                    </div>
                    <div className="navBar-notification" onClick={changeNoti}>
                        <i className="fa-regular fa-bell">
                            {notificationCount > 0 && (
                                <sup className="notification-count">{notificationCount}</sup>
                            )}
                        </i>
                    </div>
                </div>
            </div>
            <div className="navbar-spacer"></div>

            <NotificationPanel opacity={opacity} />
        </div>
    );
}

export default NavBar;
