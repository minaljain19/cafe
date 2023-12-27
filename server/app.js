require("dotenv").config();
const express = require("express");
const cors = require("cors");
const OrderData = require("./models/OrderData");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
const FoodMenu = require("./models/product");
require("./db/connect");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.post("/orderData", async (req, res) => {
  try {
    console.log(req.body);
    const order = new OrderData(req.body);
    const orderStats = await order.save();
    console.log("order detail");
    console.log(orderStats);
    res.status(201).json(orderStats);
  } catch (error) {
    console.log(error);
  }
});
app.get("/orderData", async (req, res) => {
  try {
    console.log(req.body);
    const ord = await OrderData.find({});
    console.log("order detail");
    console.log(ord);
    res.status(201).json(ord);
  } catch (error) {
    console.log(e);
    res.status(400).send(e)
  }
});
app.get("/foodMenu", async (req, res) => {
  try {
    const data1 = await FoodMenu.find({});
    console.log(data1);
    res.status(201).json(data1);
  } catch (e) {
    res.status(400).send(e);
  }
});
app.get("/", async (req, res) => {
  res.send("this is  page");
});
app.listen(port, () => {
  console.log("listen to server");
});
