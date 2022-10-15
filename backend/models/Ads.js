const mongoose = require("mongoose")

const adsSchema = new mongoose.Schema({ 
    id:{
        type:String},
    companyid:{
        type:String},
    CTA:{
        type: String}, 
    headline:{
        type: String
    },
    description:{
        type: String
    },
    imageUrl:{
        type: String
    }


})

const adsData = mongoose.model("adsData", adsSchema); 
module.exports= adsData; 