require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const noteRouter=require('./routes/notes')
console.log(process.env.DB_PASSWORD);

//*db connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Data Base Connected");
}

//bodyParser
server.use(cors()); //cross origin
server.use(express.json());
server.use(morgan("default"));
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);
server.use("/notes",noteRouter.noteRouter);
server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

server.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
