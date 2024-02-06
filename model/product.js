const mongoose = require("mongoose");

const { Schema } = mongoose;

//Schema
const productSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, min: [0, "Wrong Price"], required: true },
  discountPercentage: {
    type: Number,
    min: [0, "Wrong Discount"],
    max: [50, "Max Discount Exceeded"],
  },
  rating: {
    type: Number,
    min: [0, "Wrong Rating"],
    max: [5, "Max Rating Exceeded"],
    default:1
  },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [String],
});

const Product = mongoose.model("Product", productSchema);

exports.Product = Product;
