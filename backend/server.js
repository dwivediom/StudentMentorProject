
const env = require('dotenv').config()
const boadyparser = require("body-parser")
const serachroute = require('./routes/search.js')
const connectDB = require('./db/db')

const cors = require("cors");

const express = require("express")
const app = express()

// agrigatedData();

// connectDatabase()
connectDB()

if (process.env.NODE_ENV= "production"){
    app.use(express.static("../frontend/build"))
}




const PORT = process.env.PORT || 5000


app.use(boadyparser.json())
app.use(cors());

app.use("/", serachroute); 
// app.get('/',(req,res)=>{ 
//     res.send("working")
// })

app.listen(PORT , ()=>
console.log(`server is running on the port${PORT}`)
)