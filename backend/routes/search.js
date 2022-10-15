const express= require('express')
 const app= express()
const compdata= require("../models/Compdata.js")
const router = express.Router(); 
const cors = require('cors')
router.get('/search',(req,res)=>{ 
    res.send("please add key  search/key")
})
app.use(cors())


router.get("/search/:key",(req,res)=>{
      const keys = req.params.key; 
      const data = compdata.aggregate([
        { $lookup:
            {
              from: 'adsDatas',
              localField: 'id',
              foreignField: 'companyId',
              as: 'adsdata'
            } 
          },
          {$unwind:"$adsdata"},
          {$project:{
            id: 1,
            name: 1,
            url: 1,
            companyid:"$adsdata.companyId",
           
              primaryText: "$adsdata.primaryText",
              headline: "$adsdata.headline",
              description: '$adsdata.description',
              CTA: '$adsdata.CTA',
              imageUrl:"$adsdata.imageUrl"
    
          }},
    
          { $match : {
            "$or":[
                {"companyid":{$regex:keys}},
                {"name":{$regex:keys}},
                {"url":{$regex:keys}},
                {"CTA":{$regex:keys}},
                {"primaryText": {$regex:keys}},
               {"headline":{$regex:keys}},
               {"description":{$regex:keys}},
              
              
            ]} }
       
    ],function (error, data) {
         console.log(data)    
          res.json(data) 
         
     return (data);
    
    });


})


module.exports= router