const mongoose = require("mongoose");
const foodschema = new mongoose.Schema({
  names: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  catrgory: {
    type: Object,
  },
});
const FoodMenu = new mongoose.model("FoodMenu", foodschema);

module.exports = FoodMenu;
