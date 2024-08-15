import { Link, useNavigate } from "react-router-dom";
import "./navBar.css";
import NotificationPanel from "../NotiPanel/NotificationPanel.jsx";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from 'axios';
import cron from "node-cron";

function NavBar({setSearchData}) {
    const [opacity, setOpacity] = useState(0);
    const [notificationCount, setNotificationCount] = useState(0);
    const [notifications, setNotifications] = useState([]);
    const [searchInput,setsearchInput] = useState("");
    const navigate = useNavigate();

    function expiryChecker(){
      axios.get("http://localhost:8080/checkExpiryDate").then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log(err)
      })
    }

    useEffect(() => {
        // Initialize socket connection
        const socket = io("http://localhost:8080", { transports: ["websocket"] });
    
        socket.on("connect", () => {
          console.log("Connected to server");
        });
    
        socket.on("disconnect", () => {
          console.log("Disconnected from server");
        });
    
        socket.on("reconnect_attempt", () => {
          console.log("Attempting to reconnect...");
        });
    
        socket.on("reconnect", () => {
          console.log("Reconnected to server");
        });
    
        socket.on("reconnect_error", (error) => {
          console.error("Reconnection error:", error);
        });
    
        socket.on("lowstock", (message) => {
          console.log("Low Stock Alert:", message);
          setNotifications((prevNotifications) => {
            const updatedNotifications = [...prevNotifications, message];
            // Save message after updating state
            axios
              .post("http://localhost:8080/saveMessage", {
                notifications: updatedNotifications,
              })
              .then(() => {
                console.log("Message saved successfully");
              })
              .catch((err) => {
                console.error("Error saving message:", err);
              });
            return updatedNotifications;
          });
        });
    
        // Cleanup on unmount
        return () => {
          socket.disconnect();
        };
      }, []);

      cron.schedule("00 17 * * *",expiryChecker,{
        timezone:"Asia/Kolkata"
      } )

    

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
