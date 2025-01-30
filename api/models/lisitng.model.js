import mongoose from "mongoose";
const lisitngSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        description:{
              type:String,
              required:true,

        },
        address:{
            type:String,
            required:true,
        },
        regulerPrice:{
            type: Number,
            required: true
        },
        discountPrice:{
            type:Number,
            required:true
        },
        bathrooms:{
            type:Number,
            required:true,
        },
        bedrooms:{
            type:Number,
            required:true,
        },
        furnished:{
            type:Boolean,
            required:true,
        },
        parking:{
            type:Boolean,
            required:true,
        },
        type:{
            type:String,
            requird:true,
        },
        offer:{
            type:Boolean,
            required:true,
        },
        imageUrls:{
            type:Array,
            requird:true,

        },
        userRef:{
            type:String,
            requird:true
        },

    },{timestamps:true}
)
const Listing=mongoose.model('Listing',lisitngSchema);
export default Listing;