import { useLocation, Link } from "react-router-dom";
import "./InternalCard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";

import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function InternalCard() {
  const [data, setData] = useState([]);
  const [stockData, setStockData] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [counts, setCounts] = useState({}); // Manage count per item
  const [load, setLoad] = useState(false); // Use load for loading state
  const query = new URLSearchParams(useLocation().search);
  const category = query.get("category");

  // useEffect(() => {
  //   // Initialize socket connection
  //   const socket = io("http://localhost:8080", { transports: ["websocket"] });

  //   socket.on("connect", () => {
  //     console.log("Connected to server");
  //   });

  //   socket.on("disconnect", () => {
  //     console.log("Disconnected from server");
  //   });

  //   socket.on("reconnect_attempt", () => {
  //     console.log("Attempting to reconnect...");
  //   });

  //   socket.on("reconnect", () => {
  //     console.log("Reconnected to server");
  //   });

  //   socket.on("reconnect_error", (error) => {
  //     console.error("Reconnection error:", error);
  //   });

  //   socket.on("lowstock", (message) => {
  //     console.log("Low Stock Alert:", message);
  //     setNotifications((prevNotifications) => {
  //       const updatedNotifications = [...prevNotifications, message];
  //       // Save message after updating state
  //       axios
  //         .post("http://localhost:8080/saveMessage", {
  //           notifications: updatedNotifications,
  //         })
  //         .then(() => {
  //           console.log("Message saved successfully");
  //         })
  //         .catch((err) => {
  //           console.error("Error saving message:", err);
  //         });
  //       return updatedNotifications;
  //     });
  //   });

  //   // Cleanup on unmount
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  // Fetch product data based on category
  useEffect(() => {
    if (category) {
      axios
        .post("http://localhost:8080/itemData", { data: category })
        .then((res) => {
          const productData = res.data.productData || [];
          setData(productData);
          // Initialize counts for each product
          const initialCounts = {};
          productData.forEach((product) => {
            initialCounts[product.productId] = 0;
          });
          setCounts(initialCounts);
        })
        .catch((err) => {
          console.error("Error fetching item data:", err);
        });
    }
  }, [category]);

  // Fetch stock data based on product data
  useEffect(() => {
    if (data.length > 0) {
      setLoad(true);
      Promise.all(
        data.map((element) => {
          const productId = element.productId;
          return axios.post("http://localhost:8080/stockData", {
            data: productId,
          });
        })
      )
        .then((responses) => {
          const stocks = responses.map((res) => res.data.stockData);
          setStockData(stocks);
        })
        .catch((err) => {
          console.error("Error fetching stock data:", err);
        })
        .finally(() => setLoad(false)); // Set loading state to false after completion
    }
  }, [data]);

  const stockDecrementer = (productId, count) => {
    setLoad(true);
    if (!productId) console.log("product id missing");
    axios
      .post("http://localhost:8080/stockDecrementer", {
        productId,
        quantity: count,
      })
      .then(() => {
        // Refetch stock data after decrementing
        if (category) {
          axios
            .post("http://localhost:8080/itemData", { data: category })
            .then((res) => {
              console.log(res.data);
              const productData = res.data.productData || [];
              setData(productData);
              // Fetch updated stock data
              Promise.all(
                productData.map((element) => {
                  const productId = element.productId;
                  return axios.post("http://localhost:8080/stockData", {
                    data: productId,
                  });
                })
              )
                .then((responses) => {
                  const updatedStockData = responses.map(
                    (res) => res.data.stockData
                  );
                  setStockData(updatedStockData);
                  setCounts(0);
                })
                .catch((err) => {
                  console.error("Error fetching updated stock data:", err);
                });
            })
            .catch((err) => {
              console.error("Error refetching item data:", err);
            });
        }
      })
      .catch((err) => {
        console.error("Error decrementing stock:", err);
      })
      .finally(() => setLoad(false)); // Set loading state to false after completion
  };

  const changeCount = (productId, isInc) => {
    setCounts((prevCounts) => {
      const newCount = isInc
        ? (prevCounts[productId] || 0) + 1
        : Math.max((prevCounts[productId] || 0) - 1, 0);
      return { ...prevCounts, [productId]: newCount };
    });
  };


  return (
    <>
      <div>
        {data.map((d) => {
          // Find matching stock data
          const matchingStock = stockData.find(
            (sD) => sD[0]._id === d.stockDescription[0]
          );
          const count = counts[d.productId] || 0; // Get the count for this specific product
          return matchingStock ? (
            <div className="InternalCard_parent" key={matchingStock[0]._id}>
              <div className="InternalCard_img">
                <img src={d.image} alt={d.productName} loading="lazy" />
              </div>

              <div className="InternalCard_mid">
                <h2 className="InternalCard_name">{d.productName}</h2>
                {matchingStock[0].expiryDate ? (
                  <span>Expiry Date : {matchingStock[0].expiryDate}</span>
                ) : null}
                <span>ProductId : {matchingStock[0].productId}</span>

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
                      stockDecrementer(matchingStock[0].productId, count)
                    }
                  >
                    {" "}
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
                <h2>{matchingStock[0].stockQuantity}</h2>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </>
  );
}
