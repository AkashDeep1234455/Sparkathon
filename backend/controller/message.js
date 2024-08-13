const { MessageModel } = require('../models/MessageModel');

exports.saveMessage = async (req, res) => {
    try{

        // fetch the message details from the req body
        const notifications = req.body;

        // iterate through the notifications
        for(let notification of notifications){
            // destructure the notification object
            const { message, messageId, criticalStock, productId, stockQuantity } = notification;
            
            // validate the notification object
            if(!message ||!messageId ||!criticalStock ||!productId ||!stockQuantity){
                return res.status(400).json({
                    success: false,
                    message: "Missing required fields in the notification object"
                });
            }

            // check if the message is already in the database
            const existingMessage = await MessageModel.findOne({messageId});
            
            // if the message is not already in the database, create a new entry
            if(!existingMessage){
                const savedMessage = await MessageModel.create({ message, messageId, criticalStock, productId, stockQuantity });
                // if the message is not already in the database, send response
                res.status(201).json({
                    success: true,
                    message: "Message saved successfully",
                    data: savedMessage
                });
            }
            else {
                // if the message is already in the database, send response
                res.status(200).json({
                    success: true,
                    message: "Message already in the database",
                    data: existingMessage
                });
            }
        }


    }
    catch(error){
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