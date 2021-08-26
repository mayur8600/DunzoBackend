const express = require('express');

const router = express.Router();

const Product = require("../models/product.model");




router.post("/", async function (req, res){
    try{
      const product = await Product.create(req.body)

      return res.status(201).send(product);
    } catch (err){

        return res.status(400).send(err.message)
    }
});



router.get("/", async function (req, res){
    try{
      const products = await Product.find().lean().exec();

      return res.status(200).send(products);
    } catch (err){

        return res.status(400).send(err.message)
    }
});


router.get("/:id", async function (req, res){
    try{
      const product = await Product.findById(req.params.id).lean().exec();

      return res.status(200).send(product);
    } catch (err){

        return res.status(400).send(err.message)
    }
});


router.get("/search/:product", async function (req, res){
    try{
      const product = await Product.find({ product_name: { $regex: req.params.product } }).lean().exec();

      return res.status(200).send(product);
    } catch (err){

        return res.status(400).send(err.message)
    }
});


router.patch("/:id", async function (req, res){
    try{
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean();

      return res.status(203).send(product);
    } catch (err){

        return res.status(400).send(err.message)
    }
});


router.delete("/:id", async function (req, res){
    try{
      const product = await Product.findByIdAndDelete(req.params.id).lean();

      return res.status(200).send(product);
    } catch (err){

        return res.status(400).send(err.message)
    }
});


module.exports = router;