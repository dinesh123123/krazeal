const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
    },
    gst: {
        type:String,
        
    },
    color: {
        type:String,
        
    },
    size: {
        type:String,
        
    },

    duration: {
        type:String,
        
    },
    prices: {
        type:String,
        
    },
    delevery_charge: {
        type: String,
       
    },
    

},{timestamps:true});
module.exports =cartModel= mongoose.model('cart', cartSchema);