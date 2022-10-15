const mongoose = require('mongoose')

const companySchema= new mongoose.Schema({ 
    id:{
        type:String
    },
    
    url:{
        type: String
   
    },
    name:{
        type: String
    }
})

const Compdata=  mongoose.model("compdata",companySchema)
module.exports= Compdata