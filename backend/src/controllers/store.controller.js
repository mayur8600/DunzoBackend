const express = require('express');

const router = express.Router();

const Store = require("../models/store.model");


router.post("/", async function (req, res) {
       try{
           const store = await Store.create(req.body);

           return res.status(201).send(store);
       } catch (err) {

           return res.status(400).send(err.message);
       }
});

router.get("/", async function (req, res) {
       try{
           const stores = await Store.find().lean().exec();

           return res.status(200).send(stores);
       } catch (err) {

           return res.status(400).send(err.message);
       }
});

router.get("/:id", async function (req, res) {
       try{
           const store = await Store.findById(request.params.id).lean().exec();

           return res.status(200).send(store);
       } catch (err) {

           return res.status(400).send(err.message);
       }
});

router.get("/most", async function (req, res) {
    try{
        const stores = await Store.find().limit(10).lean().exec();

        return res.status(200).send(stores);
    } catch (err) {

        return res.status(400).send(err.message);
    }
});



router.patch("/:id", async function (req, res){
    try{
      const store = await Store.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean();

      return res.status(203).send(store);
    } catch (err){

        return res.status(400).send(err.message)
    }
});


router.delete("/:id", async function (req, res){
    try{
      const store = await Store.findByIdAndDelete(req.params.id).lean();

      return res.status(200).send(store);
    } catch (err){

        return res.status(400).send(err.message)
    }
});

module.exports = router;