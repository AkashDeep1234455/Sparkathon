import { useLocation, Link } from "react-router-dom";
import "./InternalCard.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function InternalCard() {
  const [data, setData] = useState([]);
  const [stockData, setStockData] = useState([]);
  const [counts, setCounts] = useState({}); // Manage count per item
  const [load, setLoad] = useState(false); // Use load for loading state
  const [sortedData, setSortedData] = useState([]); // Manage sorted data
  const query = new URLSearchParams(useLocation().search);
  const category = query.get("category");

  // Fetch product data based on category
  useEffect(() => {
    if (category) {
      axios
        .post("https://sparkathon-j762.onrender.com/itemData", { data: category })
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
          return axios.post("https://sparkathon-j762.onrender.com/stockData", {
            data: productId,
          });
        })
      )
        .then((responses) => {
          const stocks = responses.map((res) => res.data.stockData);
          setStockData(stocks);

          // Sort the stock data based on expiry date or any other filter
          const sortedStockData = stocks.sort((a, b) => {
            const dateA = a[0].expiryDate;
            const dateB = b[0].expiryDate;
            return dateA - dateB;
          });
          setSortedData(sortedStockData);
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
      .post("https://sparkathon-j762.onrender.com/stockDecrementer", {
        productId,
        quantity: count,
      })
      .then(() => {
        // Refetch stock data after decrementing
        if (category) {
          axios
            .post("https://sparkathon-j762.onrender.com/itemData", { data: category })
            .then((res) => {
              console.log(res.data);
              const productData = res.data.productData || [];
              setData(productData);
              // Fetch updated stock data
              Promise.all(
                productData.map((element) => {
                  const productId = element.productId;
                  return axios.post("https://sparkathon-j762.onrender.com/stockData", {
                    data: productId,
                  });
                })
              )
                .then((responses) => {
                  const updatedStockData = responses.map(
                    (res) => res.data.stockData
                  );

                  // Sort the updated stock data after decrementing
                  const sortedStockData = updatedStockData.sort((a, b) => {
                    const dateA = a[0].expiryDate;
                    const dateB = b[0].expiryDate;
                    return dateA - dateB;
                  });

                  setStockData(updatedStockData);
                  setSortedData(sortedStockData);
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

  const convertToIST = (dateString) => {
    const utcDate = new Date(dateString);
    const options = { timeZone: 'Asia/Kolkata', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return utcDate.toLocaleString('en-IN', options);
  };
  

  return (
    <>
      <div>
        {sortedData.map((sD, index) => {
          const d = data[index]; // Assuming sortedData aligns with original data order

          const count = counts[d.productId] || 0; // Get the count for this specific product
          return sD ? (
            <div className="InternalCard_parent" key={sD[0]._id}>
              <div className="InternalCard_img">
                <img src={d.image} alt={d.productName} loading="lazy" />
              </div>

              <div className="InternalCard_mid">
                <h2 className="InternalCard_name">{d.productName}</h2>
                {sD[0].expiryDate ? (
                  <span>Expiry Date :
                    {convertToIST(sD[0].expiryDate).slice(0, -11)}
                  </span>
                ): null}
                <span>ProductId : {sD[0].productId}</span>

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
                      stockDecrementer(sD[0].productId, count)
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
                <h2>{sD[0].stockQuantity}</h2>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </>
  );
}
