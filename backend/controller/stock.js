const { StockModel } = require("../models/StockModel");
const { ProductModel } = require("../models/ProductModel");

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
    const stockData = await StockModel.find({
      productId: productId,
    });

    // check if stock exists
    if (!stockData) {
      return res.status(404).json({
        success: false,
        error: "Stock not found for the given productId",
        message: "Stock not found!!",
      });
    }

    // check if stock quantity is enough
    if (stockData[0].stockQuantity < quantity) {
      return res.status(400).json({
        success: false,
        error: "Not enough stock available",
        message: "Not enough stock available!!",
      });
    }

    // update stock quantity
    stockData[0].stockQuantity -= quantity;
    await stockData[0].save();
    res.json({
      success: true,
      message: "Stock decremented successfully",
      updatedStockQuantity: stockData[0].stockQuantity,
    });
    // check if stock quantity is less than or equal to 0
    if (stockData[0].stockQuantity <= 0) {
      // delete product if stock quantity is less than or equal to 0
    //   await StockModel.findByIdAndDelete(productId);
    }

    // check if stock quantity is less than or equal to minStock
    if (stockData[0].stockQuantity <= stockData[0].minStock) {
      // send alert to admin for low stock
      console.log('stock quantity is less than or equal to', stockData[0].minStock);
      // send email notification to supplier
      // send push notification to admin
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error while decrementing stock",
    });
  }
};
