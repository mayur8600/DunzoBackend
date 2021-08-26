const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    desc: {
      type: String,
    },
    quantity: { type: Number, required: true },
    img: {
      type: String,
      required: true,
    },
    price: { type: Number, required: true },
    storeId: [
      { type: mongoose.Schema.Types.ObjectId, ref: "store", required: true },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
