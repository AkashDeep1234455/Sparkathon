import { useLocation } from 'react-router-dom'
import './InternalCard.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function InternalCard(){
    const [data,setData] = useState([]);
    const query = new URLSearchParams(useLocation().search);
    const category = query.get('category');
    useEffect(() => {
        if (category) {
            axios.post("http://localhost:8080/itemData", { data: category })
                .then((res) => {
                    // Check the structure of the response data
                    const productData = res.data.productData;  // Default to empty array if undefined
                    setData(productData);  // Log the fetched data directly
                })
                .catch((err) => {
                    console.log("There is an error:", err);
                });
        }
    }, [category]);
    useEffect(() => {
        console.log("Data state updated:", data); // This will log the updated data when it changes
    }, [data]);

    return(
        <>
            <div className="InternalCard_parent">
                <div className="InternalCard_img">
                    <div className="IMAGE">
                        
                    </div>
                </div>

                <div className='InternalCard_mid'>
                    <h3 className="InternalCard_name">Portable Projector</h3>
                    <span>Expirey Date</span>
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