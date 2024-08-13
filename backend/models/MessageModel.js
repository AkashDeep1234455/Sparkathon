const {MessageSchema} = require('../schema/MessageSchema');
const {model} = require("mongoose");

const MessageModel = new model("Message",MessageSchema);
module.exports = {MessageModel};