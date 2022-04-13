const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    shippingInfo:{
        address: {
            type:String,
            require:true
        },
        city: {
            type:String,
            require:true
        },
        state: {
            type:String,
            require:true
        },
        country: {
            type:String,
            require:true
        },
        pinCode: {
            type:Number,
            require:true
        },
        phoneNo: {
            type:Number,
            require:true
        }
    },
    orderItems:[
        {
            name:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            },
            image:{
                type:String,
            },
            product:{
                type:mongoose.Schema.ObjectId,
                ref:"Product",
                required:true,
            }
        }
    ],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    },
    paymentInfo:{
        id:{
            type:String,
            required:true,
        },
        status:{
            type:String,
            required:true
        }
    },
        paidAt:{
            type:Date,
        },
        itemsPrice:{
            type:Number,
            default:0,
            required:true,
        },
        taxPrice:{
            type:Number,
            default:0,
            required:true,
        },
        shippingPrice:{
            type:Number,
            default:0,
            required:true,
        },
        totalPrice:{
            type:Number,
            default:0,
            required:true,
        },
        orderStatus:{
            type:String,
            default:'Processing',
            required:true,
        },
        deliveredAt:Date,
        createdAt:{
            type:Date,
            default:Date.now,
        },
});

module.exports = mongoose.model("Order",orderSchema);