import './NotificationPanel.css';
import Notification from '../Notification/Notification.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function NotificationPanel({ opacity }) {
    const [displayNotifications, setDisplayNotifications] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/getMessages")
            .then((res) => {
                setDisplayNotifications(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    console.log(opacity);
    const styles = opacity === 0 ? { right: "-35%" } : { right: "0.5rem" };

    return (
        <div className="noti" style={styles}>
            {displayNotifications.map((element, index) => (
                <div>
                    <Notification key={index} element={element} />
                </div>
            ))}
        </div>
    );
}
