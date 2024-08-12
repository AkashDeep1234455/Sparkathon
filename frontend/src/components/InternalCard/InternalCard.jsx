import { useLocation } from "react-router-dom";
import "./InternalCard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client"




export default function InternalCard() {
  const [data, setData] = useState([]);
  const [stockData, setStockData] = useState([]);
  const [notifications, setNotifications] = useState([]); 
  const query = new URLSearchParams(useLocation().search);
  const category = query.get("category");

 
  useEffect(() => {
    // Initialize socket connection
    const socket = io('http://localhost:8080', { transports: ['websocket'] });

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    socket.on('reconnect_attempt', () => {
      console.log('Attempting to reconnect...');
    });

    socket.on('reconnect', () => {
      console.log('Reconnected to server');
    });

    socket.on('reconnect_error', (error) => {
      console.error('Reconnection error:', error);
    });

    socket.on('lowstock', (message) => {
      console.log('Low Stock Alert:', message);
      setNotifications((prevNotifications) => [...prevNotifications, message]); 
     
    });

    // Cleanup on unmount
    return () => {
      socket.disconnect();
    };
  }, []);
  // Fetch product data based on category
  useEffect(() => {
    if (category) {
      axios
        .post("http://localhost:8080/itemData", { data: category })
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
        axios
          .post("http://localhost:8080/stockData", { data: productId })
          .then((res) => {
            const stock = res.data.stockData;
            setStockData((prevStockData) => [...prevStockData, stock]); // Append to existing stock data
          })
          .catch((err) => {
            console.log("There is an error in stock ", err);
          });
      });
    }
  }, [data]);

  useEffect(() => {
    console.log(data);
  }, [setData]);

  useEffect(() => {
    console.log(stockData);
  }, [stockData]);
  useEffect(() => {
    console.log(notifications);
  }, [notifications]);


  const stockDecrementer = (productId) => {
    if (productId) {
      axios.post("http://localhost:8080/stockDecrementer", { productId: productId, quantity: 1 })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log("Error while sending stock decrement request:", err.response ? err.response.data : err.message);
        });
    } else {
      console.log("Product ID missing");
    }
  };
  
  return (
    <>
      <div>
        {data.map((d) => {
          // Find matching stock data
          const matchingStock = stockData.find(
            (sD) => sD[0]._id === d.stockDescription[0]
          );
          return matchingStock ? (
            <div className="InternalCard_parent" key={matchingStock[0]._id}>
              <div className="InternalCard_img">
                <img src={d.image} alt={d.productName} />
              </div>

              <div className="InternalCard_mid">
                <h3 className="InternalCard_name">{d.productName}</h3>
                {matchingStock[0].expiryDate ? (
                  <span>Expiry Date : {matchingStock[0].expiryDate}</span>
                ) : null}
                <span>ProductId : {matchingStock[0].productId}</span>
                <button className="InternalCard_button">New Stock</button>
                <button className="decrementer" onClick={()=>{
                    stockDecrementer(matchingStock[0].productId);
                }}>-</button>
              </div>

              <div className="InternalCard_TotalItems">
                <p>Total No. Of Items</p>
                <h2>{matchingStock[0].stockQuantity}</h2>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </>
  );
}
