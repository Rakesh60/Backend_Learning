require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors=require('cors');

const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
console.log(process.env.DB_PASSWORD);

//*db connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/ecommerce");
  console.log("Data Base Connected");
}







//bodyParser
server.use(cors())
server.use(express.json());
server.use(morgan("default"));
server.use(express.static(process.env.PUBLIC_DIR));
server.use("/products", productRouter.router);
server.use("/user", userRouter.router);

server.listen(process.env.PORT, () => {
  console.log("server started");
});
