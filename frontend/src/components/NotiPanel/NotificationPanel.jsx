import './NotificationPanel.css';
import Notification from '../Notification/Notification.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function NotificationPanel({ opacity }) {
    const [displayNotifications, setDisplayNotifications] = useState([]);


    useEffect(() => {
        // Fetch existing messages on component mount
        const fetchNotifications = () => {
            axios.get("https://sparkathon-j762.onrender.com/getMessages")
                .then((res) => {
                    if(res.data.data.length>0){
                    setDisplayNotifications(res.data.data);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        // Fetch notifications immediately on mount
        fetchNotifications();

        // Set up the interval to fetch notifications every 5 seconds
        const intervalId = setInterval(fetchNotifications, 5000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);
    const styles = opacity === 0 ? { right: "-35%" } : { right: "0.5rem" };

    return (
        <div className="noti" style={styles}>
            {displayNotifications.map((element, index) => (
            <div key={index}> {/* Add key here */}
                <Notification element={element} />
            </div>
        ))}
        </div>
    );
}
