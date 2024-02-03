const express = require("express");
const morgan = require("morgan");
const server = express();
const productController = require("./controller/product");

//bodyParser
server.use(express.json());
server.use(morgan("default"));
server.use(express.static("public"));
console.log(productController);

server.post("/products", productController.createProduct);
server.get("/products", productController.getProducts);
server.get("/products/:id", productController.getProduct);
server.put("/products/:id", productController.updateProduct);
server.patch("/products/:id", productController.replaceProduct);
server.delete("/products/:id", productController.deleteProduct);

server.listen(8080, () => {
  console.log("server started");
});
