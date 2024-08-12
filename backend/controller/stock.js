const { outOfStock } = require("../email/template/outOfStock");
const { StockModel } = require("../models/StockModel");
const { ProductModel } = require("../models/ProductModel");
const mailSender = require("../utils/nodeMailer");

exports.stockDecrementer = async (req, res) => {
  try {
    // fetch productId from req body
    const { productId, quantity } = req.body;

    // validate productId and quantity
    if (!productId || !quantity || quantity <= 0) {
      return res.status(400).json({
        success: false,
        error: "Invalid request",
        message: "Please provide a valid productId and quantity!!",
      });
    }

    // find stock with productId
    const ProductData = await ProductModel.findOne({
      productId: productId,
    }).populate('supplierId')
    .populate({
      path: 'stockDescription',
      options: { sort: { expiryDate: 1 } } // 1 for ascending, -1 for descending
    });

    console.log("ProductData", ProductData);

    // check if stock exists
    if (!ProductData || ProductData.length === 0) {
      return res.status(404).json({
        success: false,
        error: "Stock not found for the given productId",
        message: "Stock not found!!",
      });
    }

    const {supplierId, stockDescription} = ProductData;
    // console.log("supplierId", supplierId);
    // console.log("stockDescription", stockDescription);


    // check if stock quantity is enough
    if (stockDescription[0].stockQuantity < quantity) {
      return res.status(400).json({
        success: false,
        error: "Not enough stock available",
        message: "Not enough stock available!!",
      });
    }

    // update stock quantity
    const stockData = await StockModel.findOne({productId: stockDescription[0].productId});
    // check stock data
    if (!stockData || stockData===0) {
      return res.status(404).json({
        success: false,
        error: "Stock not found for the given productId",
        message: "Stock not found!!",
      });
    }
    stockData.stockQuantity += quantity;
    await stockData.save();
    console.log("stockData", stockData);
    
    // check if stock quantity is less than or equal to 0
    if (stockData.stockQuantity <= 0) {
      // delete product if stock quantity is less than or equal to 0
    //   await StockModel.findByIdAndDelete(productId);
    }

    // check if stock quantity is less than or equal to minStock
    if (stockData.stockQuantity <= stockData.minStock) {
      // send alert to admin for low stock
      console.log('stock quantity is less than or equal to', stockData.minStock);

      // send email notification 
      const email = "akashdeep19735@gmail.com";
      const title = "Walmart - product out of stock"
      const body = outOfStock(supplierId.phoneNumber, ProductData.productName, stockData.minStock);

      const info = await mailSender(email, title, body);

      console.log(info);
      // send push notification to admin
    }

    // send success response
    res.json({
      success: true,
      message: "Stock decremented successfully",
      updatedStockQuantity: stockDescription.stockQuantity,
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error while decrementing stock",
    });
  }
};
