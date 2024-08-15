const { expiredProduct } = require('../email/template/expiredProduct');
const { MessageModel } = require('../models/MessageModel');
const { ProductModel } = require('../models/ProductModel');

exports.saveMessage = async (req, res) => {
    try {
        // Fetch the message details from the req body
        const { notifications } = req.body;

        // Validate if notifications is an array
        if (!Array.isArray(notifications) || notifications.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No notifications provided"
            });
        }

        // Process each notification
        const results = [];
        for (let notification of notifications) {
            // Destructure the notification object
            const { message, messageId, criticalStock, productId, stockQuantity } = notification;
            
            // Validate the notification object
            if (!message || !messageId || !criticalStock || !productId || !stockQuantity) {
                results.push({
                    success: false,
                    messageId,
                    message: "Missing required fields in the notification object"
                });
                continue;
            }

            // Check if the message is already in the database
            const existingMessage = await MessageModel.findOne({ messageId });

            if (!existingMessage) {
                // Create a new entry
                const savedMessage = await MessageModel.create({ message, messageId, criticalStock, productId, stockQuantity });
                results.push({
                    success: true,
                    messageId,
                    message: "Message saved successfully",
                    data: savedMessage
                });
            } else {
                results.push({
                    success: true,
                    messageId,
                    message: "Message already in the database",
                    data: existingMessage
                });
            }
        }

        // Send a single response with results
        res.status(200).json({
            success: true,
            message: "Notifications processed successfully",
            data: results
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error while saving message"
        });
    }
}

exports.getMessages = async (req, res) => {
    try{
        // get all the messages from the server
        const messages = await MessageModel.find({});

        // validate the messages
        if (messages.length === 0) {
            return res.status(200).json({
                success: true,
                message: "No messages found",
                data: [] // Send an empty array if no messages are found
            });
        }
        
        // send the messages to the client
        res.json({
            success: true,
            message: "Messages fetched successfully",
            data: messages
        });

    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error while fetching messages"
        });
    }
}

exports.deleteMessage = async (req, res) => {
    try {
        const { messageId } = req.body; // Corrected typo from "mesageId" to "messageId"

        // Validate the messageId
        if (!messageId) {
            return res.status(400).json({
                success: false,
                message: "Message ID is required",
            });
        }

        // Find and delete the message
        const deleteResult = await MessageModel.findOneAndDelete({ messageId });

        if (!deleteResult) {
            return res.status(404).json({
                success: false,
                message: "Message not found",
            });
        }

        // If the message was deleted successfully
        res.status(200).json({
            success: true,
            message: "Message deleted successfully",
        });

    } catch (error) {
        console.error("Error deleting message:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error while deleting message",
        });
    }
};

// check the exiry date of the product 
// Schedule a job to run daily at 9 AM
exports.checkExpiryDate = async (req, res) => {
  try {
    // Calculate the date range (today + 10 days)
    const today = new Date();
    const next10Days = new Date();
    next10Days.setDate(today.getDate() + 10);

    // Find products with expiryDate within the next 10 days
    const expiringProducts = await ProductModel.find({
      'stockDescription.expiryDate': {
        $gte: today,
        $lte: next10Days,
      }
    }).populate('supplierId').pupulate("stockDescription"); // Populate supplier details if needed

    // Handle the expiring products list (e.g., log, send an alert, etc.)
    if (expiringProducts.length > 0) {
      console.log('Products expiring in the next 10 days:', expiringProducts);
      const email = "akashdeep19735@gmail.com";
      const title = "Walmart - Products about to be expired"
      const body = expiredProduct(expiringProducts);
      const info = await mailSender(email, title, body);
      console.log("email info: ", info);
    } else {
      console.log('No products expiring in the next 10 days.');
    }
  } catch (error) {
    console.error('Error checking for expiring products:', error);
  }
};
