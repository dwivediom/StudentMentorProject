const env =  require("dotenv").config()
const mongoose = require("mongoose")

const connectDB = async ()=>{ 
    try { 
        var DB= await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true , 
            useUnifiedTopology:true 
        });
        console.log("mongodb connection sucess ")
    
    }catch(error ){
        console.error("mongoDB connection faild "+ error.message)
        process.exit(1);
    }
}

module.exports= connectDB

