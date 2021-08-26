const express = require('express');

const connect = require("./configs/db");

const cors = require("cors");


const storeController = require("./controllers/store.controller");
const productController = require("./controllers/product.controller");


const app = express();

app.use(express.json());
app.use(cors());


app.use("/stores", storeController);
app.use("/products", productController);

app.listen(4455, async () => {
      await connect();
      console.log("Listening on port 4455");
})