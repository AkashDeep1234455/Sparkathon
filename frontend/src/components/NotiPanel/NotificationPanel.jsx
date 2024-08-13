import './NotificationPanel.css'
import Notificaltion from '../Notification/Notification.jsx';

export default function NotificationPanel({opacity}) {
    console.log(opacity);
    const styles = opacity === 0? {right : "-35%"} : {right : "0.5rem"};
    return (
        <div className="noti" style={styles}>
            <Notificaltion/>
            <Notificaltion/><Notificaltion/><Notificaltion/><Notificaltion/><Notificaltion/><Notificaltion/>
        </div>
    )
}
