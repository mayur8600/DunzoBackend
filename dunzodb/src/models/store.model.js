const mongoose = require('mongoose');


const storeSchema = new mongoose.Schema({
     store_name: {type: String, required: true},
     address: {type: String, required: true},
     img: {
         src: [{
             type: String,
             required: true
         }]
     },
     distance: {type: Number, required: true},
     travel_time: {type: Number, required: true}

},{
    versionKey: false,
    timestamps: true
});

const Store = mongoose.model("store", storeSchema);

module.exports = Store;