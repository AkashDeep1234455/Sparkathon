import { useSearchData } from "../context";
import { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import { useLocation, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import './SearchResultComp.css'; // Adjust the path if needed

export default function SearchResultComp() {
    const searchData = useSearchData();
    const [notifications, setNotifications] = useState([]);
    const [counts, setCounts] = useState({}); // Manage count per item
    const [load, setLoad] = useState(false); // Use load for loading state
    const query = new URLSearchParams(useLocation().search);
    const category = query.get("category");

    // Socket connection and notifications
    useEffect(() => {
        const socket = io("http://localhost:8080", { transports: ["websocket"] });

        socket.on("connect", () => {
            console.log("Connected to server");
        });

        socket.on("disconnect", () => {
            console.log("Disconnected from server");
        });

        socket.on("lowstock", (message) => {
            console.log("Low Stock Alert:", message);
            setNotifications((prevNotifications) => {
                const updatedNotifications = [...prevNotifications, message];
                axios.post("http://localhost:8080/saveMessage", { notifications: updatedNotifications })
                    .then(() => {
                        console.log("Message saved successfully");
                    })
                    .catch((err) => {
                        console.error("Error saving message:", err);
                    });
                return updatedNotifications;
            });
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const stockDecrementer = (productId, count) => {
        if (!productId) console.log("product id missing");
        axios.post("http://localhost:8080/stockDecrementer", {
            productId,
            quantity: count,
        })
        .then(() => {
            searchData.forEach(element => {
                if(element.productId===productId){
                    element.stockDescription[0].stockQuantity -= count;
                    setLoad(!load);
                }
            });
            
        })
        .catch((err) => {
            console.error("Error decrementing stock:", err);
        }) // Set loading state to false after completion
    };

    const changeCount = (productId, isInc) => {
        setCounts((prevCounts) => {
            const newCount = isInc
                ? (prevCounts[productId] || 0) + 1
                : Math.max((prevCounts[productId] || 0) - 1, 0);
            return { ...prevCounts, [productId]: newCount };
        });
    };

    const convertToIST = (dateString) => {
        const utcDate = new Date(dateString);
        const options = { timeZone: 'Asia/Kolkata', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return utcDate.toLocaleString('en-IN', options);
    };

    return (
        <div className="searchCards">
            {searchData.map((d) => {
                const count = counts[d.productId] || 0; // Get the count for this specific product
                return (
                    <div className="InternalCard_parent" key={d._id}>
                        <div className="InternalCard_img">
                            <img src={d.image} alt={d.productName} loading="lazy" />
                        </div>

                        <div className="InternalCard_mid">
                            <h2 className="InternalCard_name">{d.productName}</h2>
                            {d.stockDescription[0].expiryDate ? (
                                <span>Expiry Date : {convertToIST(d.stockDescription[0].expiryDate).slice(0, -11)}</span>
                            ) : null}
                            <span>ProductId : {d.productId}</span>

                            <div className="stockDecrement">
                                <Button
                                    variant="outlined"
                                    size="small"
                                    className="decrementer"
                                    onClick={() => changeCount(d.productId, false)}
                                >
                                    -
                                </Button>
                                <p>{count}</p>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    className="incrementer"
                                    onClick={() => changeCount(d.productId, true)}
                                >
                                    +
                                </Button>
                                <Button
                                    style={{ backgroundColor: "#0FA4AF" }}
                                    variant="contained"
                                    size="small"
                                    className="InternalCard_button"
                                    onClick={() =>
                                        stockDecrementer(d.productId, count)
                                    }
                                >
                                    <AddShoppingCartIcon />
                                </Button>
                            </div>

                            <Link to="/form" className="form-linkButton">
                                <Button
                                    style={{ backgroundColor: "#0FA4AF" }}
                                    variant="contained"
                                    size="small"
                                    className="InternalCard_button"
                                >
                                    New Stock
                                </Button>
                            </Link>
                        </div>

                        <div className="InternalCard_TotalItems">
                            <p>Total No. Of Items</p>
                            <h2>{d.stockDescription[0].stockQuantity}</h2>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
