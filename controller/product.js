const fs = require("fs");
const model = require("../model/product");
const Product = model.Product;

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const savedProduct = await product.save();
    console.log(savedProduct);
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
};
exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
exports.getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.json(error);
  }
};
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).json(result);
  } catch (error) {
    res.json(error);
  }
};
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Product.findByIdAndDelete(id);
    res.status(201).json(result);
  } catch (error) {
    res.json(error);
  }
};
