const express = require("express");
const userController = require("../controller/user");
const router = express.Router();

router
  .get("/", userController.getProducts)
  .post("/", userController.createProduct)
  .get("/:id", userController.getProduct)
  .put("/:id", userController.updateProduct)
  .delete("/:id", userController.deleteProduct)
  .patch("/:id", userController.replaceProduct);

exports.router = router;
