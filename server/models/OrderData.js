const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  OrderId: { type: String ,required: true,},
  Name: { type: String,required: true, },
  Des: {
    type: String,
  },
  PhoneNo: {
    type: String,
    required: true,
  },
  Date1 : { type: String ,required: true,},
  Price: { type: String ,required: true,},
  Items: { type: Array ,required: true,},
});
const OrderData = new mongoose.model("OrderData", orderSchema);
module.exports = OrderData;
