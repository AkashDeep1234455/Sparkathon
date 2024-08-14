import './Notification.css'

export default function Notification({element}){
    console.log(element);
    return (
        <div className="Notification">
            <p>ProductId: {element.productId}</p>
            <p>Message: {element.message}</p>
            <p>Current Stock: {element.stockQuantity}</p>
            <p>Critical Stock: {element.criticalStock}</p>
        </div>
    )
}