import { useLocation } from 'react-router-dom'
import './InternalCard.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function InternalCard(){
    const [data, setData] = useState([]);
    const [stockData, setStockData] = useState([]);
    const query = new URLSearchParams(useLocation().search);
    const category = query.get('category');

    // Fetch product data based on category
    useEffect(() => {
        if (category) {
            axios.post("http://localhost:8080/itemData", { data: category })
                .then((res) => {
                    const productData = res.data.productData || []; // Fallback to empty array if undefined
                    setData(productData);
                })
                .catch((err) => {
                    console.log("There is an error:", err);
                });
        }
    }, [category]);

    // Fetch stock data based on product data
    useEffect(() => {
        // Only proceed if there is product data
        if (data.length > 0) {
            data.forEach((element) => {
                const productId = element.productId;
                axios.post("http://localhost:8080/stockData", { data: productId })
                    .then((res) => {
                        const stock = res.data.stockData;
                        setStockData(prevStockData => [...prevStockData, stock]); // Append to existing stock data
                    })
                    .catch((err) => {
                        console.log("There is an error in stock ", err);
                    });
            });
        }
    }, [data]);

    return(
        <>
            <div className="InternalCard_parent">
                <div className="InternalCard_img">
                    <img src="https://avatars.mds.yandex.net/i?id=c9bf0ff4f9986229f63ea4630d14afa50bb74c2d-12990625-images-thumbs&n=13" alt="#" />
                </div>

                <div className='InternalCard_mid'>
                    <h3 className="InternalCard_name">Portable Projector</h3>
                    <span>Expiry Date</span>
                    <span>Number of items</span>
                    <button className='InternalCard_button'>New Stock</button>
                </div>

                <div className="InternalCard_TotalItems"> 
                    <p>Total No. Of Items</p>
                    <h2>50</h2>
                </div>
            </div>
        </>
    )
}
