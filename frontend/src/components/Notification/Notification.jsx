import './Notification.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';

export default function Notification({ element}) {
    const notificationDeleteHandler = () => {
        axios.delete("http://localhost:8080/deleteMessage", {
            data: { messageId: element.messageId }
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log("Message deletion error", err);
        });
    };

    return (
        <div className="Notification">
            <p><b>ProductId</b>: {element.productId}</p>
            <p><b>Message</b>: {element.message}</p>
            <p><b>Current Stock</b>: {element.stockQuantity}</p>
            <p><b>Critical Stock</b>: {element.criticalStock}</p>
            <DeleteForeverIcon className='deleteNoti' onClick={notificationDeleteHandler} />
        </div>
    );
}
