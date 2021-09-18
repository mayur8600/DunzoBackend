const express = require('express');

const router = express.Router();

const User = require("../models/user.model");


router.post("/", async function (req, res) {
       try{
           const user = await User.create(req.body);

           return res.status(201).send(user);
       } catch (err) {

           return res.status(400).send(err.message);
       }
});

router.get("/", async function (req, res) {
       try{
           const users = await User.find().lean().exec();

           return res.status(200).send(users);
       } catch (err) {

           return res.status(400).send(err.message);
       }
});

router.get("/:mobile_no", async function (req, res) {
       try{
           const user = await User.find({ mobile_no: {$eq: req.params.mobile_no }}).lean().exec();

           return res.status(200).send(user);
       } catch (err) {

           return res.status(400).send(err.message);
       }
});

// router.get("/search/:user", async function (req, res) {
//     try{
//         const user = await User.find({ store_name: { $regex: req.params.user } }).lean().exec();
        
//         return res.status(200).send(user);
//     } catch (err) {

//         return res.status(400).send(err.message);
//     }
// });

// router.get("/most", async function (req, res) {
//     try{
//         const users = await User.find().limit(10).lean().exec();

//         return res.status(200).send(users);
//     } catch (err) {

//         return res.status(400).send(err.message);
//     }
// });



router.patch("/:id", async function (req, res){
    try{
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean();

      return res.status(203).send(user);
    } catch (err){

        return res.status(400).send(err.message)
    }
});


router.delete("/:id", async function (req, res){
    try{
      const user = await User.findByIdAndDelete(req.params.id).lean();

      return res.status(200).send(user);
    } catch (err){

        return res.status(400).send(err.message)
    }
});

module.exports = router;