import './Notification.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export default function Notification({element}){
    console.log(element);
    return (
        <div className="Notification">
            <p><b>ProductId</b>: {element.productId}</p>
            <p><b>Message</b>: {element.message}</p>
            <p><b>Current Stock</b>: {element.stockQuantity}</p>
            <p><b>Critical Stock</b>: {element.criticalStock}</p>
            <DeleteForeverIcon className='deleteNoti'/>
        </div>
    )
}