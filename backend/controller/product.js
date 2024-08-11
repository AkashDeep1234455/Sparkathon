if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const { ProductModel } = require("../models/ProductModel");
const { SellerModel } = require("../models/SellerModel");
const { StockModel } = require("../models/StockModel");
const uuid = require("uuid");

const product = require("../productData");

exports.dataEntry = async (req, res) => {
  try {
    for (const element of product) {
      const { supplier, stock_description } = element;
      const currProductId = uuid.v4();
      let date = new Date(stock_description.expiry_date);
      console.log(currProductId);
      try {
        const supplierData = await SellerModel.create({
          sellerName: supplier.name,
          email: supplier.email,
          phoneNumber: supplier.phone,
        });
        let stockDescriptionData;
        if (stock_description.expiry_date != "N/A") {
          stockDescriptionData = await StockModel.create({
            productId: currProductId,
            stockQuantity: stock_description.stock_quantity,
            expiryDate: date,
            minStock: stock_description.critical_quantity,
          });
        } else {
          stockDescriptionData = await StockModel.create({
            productId: currProductId,
            stockQuantity: stock_description.stock_quantity,
            minStock: stock_description.critical_quantity,
          });
        }

        // console.log("supplier data", supplierData);
        // console.log("stock_description", stockDescriptionData);

        const productDetail = await ProductModel.create({
          productId: currProductId,
          productName: element.product_name,
          image: element.product_image,
          main_category: element.main_category,
          category: element.category,
          brand: element.brand,
          supplierId: supplierData._id,
          stockDescription: stockDescriptionData._id,
        });

        console.log("product detail", productDetail);
      } catch (error) {
        console.error(
          "Error creating seller or stock description data:",
          error
        );
      }
    }

    res.status(200).send("Data entry completed successfully");
  } catch (error) {
    console.error("Error processing data entry:", error);
    res.status(500).send("Error processing data entry");
  }
};

exports.itemData = async (req, res) => {
  try {
    const { data } = req.body;
    if (data) {
      const productData = await ProductModel.find({ main_category: data }); // Should log the received category
      res.json({ productData });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.stockData = async (req,res)=>{
  try{
    const {data} = req.body;
    if(data){
      const productId = data;
      const stockData = await StockModel.find({productId:productId});
      res.json({stockData});
    }else{
      const stockData = {message:"no data"};
      res.json({stockData});
    }
  }catch(err){
    console.log(err);
  }
}








exports.getProduct = async (req, res) => {
  try {
    // fatch product name
    const {productName} = req.body;

    // validate product name
    if (!productName) {
      return res.status(400).json(
        {
          success: false,
          message: "Product name is required",
        }
      )
    }

    // fetch product details by product name and populate supplier and stock details
    // populate method is used to fetch related data from another collection
    // populate("supplierId", "sellerName email phoneNumber") - fetches seller details
    // populate("stockDescription", "stockQuantity expiryDate minStock") - fetches stock details
    const product = await ProductModel.find({productName:productName})
     .populate("supplierId", "sellerName email phoneNumber")
     .populate("stockDescription", "stockQuantity expiryDate minStock");

    //  validate product
    if (!product) {
      return res.status(404).json(
        {
          success: false,
          message: "Product not found",
        }
      )
    }

    // send success
    res.status(200).json(
      {
        success: true,
        product: product[0],
      }
    )
  }
  catch (error) {
    console.error("Error fetching product data:", error);
    res.status(500).json(
      {
        success: false,
        message: "Error fetching product data",
      }
    )
  }
}
