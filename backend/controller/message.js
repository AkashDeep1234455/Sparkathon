const { MessageModel } = require('../models/MessageModel');

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
        if(!messages || !messages.length){
            return res.status(404).json({
                success: false,
                message: "No messages found"
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