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
exports.getProducts = (req, res) => {
  const result = Product.find({});
  res.json(result);
};
exports.getProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
};
exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};
exports.replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
};
exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
};
