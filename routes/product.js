const express = require("express");
const productController = require("../controller/product");
const router = express.Router();

router
  .get("/", productController.getProducts)
  .post("/", productController.createProduct)
  .get("/:id", productController.getProduct)
  .put("/:id", productController.updateProduct)
  .delete("/:id", productController.deleteProduct)
  .patch("/:id", productController.replaceProduct);

exports.router = router;
