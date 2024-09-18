import './Notification.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Notification({ element}) {
    const notificationDeleteHandler = () => {
        axios.delete("https://sparkathon-j762.onrender.com/deleteMessage", {
            data: { messageId: element.messageId }
        })
        .then((res) => {
            // toast("Wow so easy!");
            toast.success('Notification Deleted')
            console.log(res);
        })
        .catch((err) => {
            console.log("Message deletion error", err);
        });
    };

    return (
        <div className="Notification">
            <ToastContainer position="top-center" reverseOrder={false}/>
            <p><b>ProductId</b>: {element.productId}</p>
            <p><b>Message</b>: {element.message}</p>
            <p><b>Current Stock</b>: {element.stockQuantity}</p>
            <p><b>Critical Stock</b>: {element.criticalStock}</p>
            <DeleteForeverIcon className='deleteNoti' onClick={notificationDeleteHandler} />
        </div>
    );
}
