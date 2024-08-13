const {MessageSchema} = require('../schema/ProductSchema');
const {model} = require("mongoose");

const MessageModel = new model("Message",MessageSchema);
module.exports = {MessageModel};