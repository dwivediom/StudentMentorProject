
import React,{useEffect, useState , } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import addkey from '../../reducers/addkey';
import Adsitem from '../Adsitem/Adsitem';


const Ads = () => {
  const mystate = useSelector( (state)=> state.addkey)
  
  console.log("mystate"+mystate.skey)
  const[keys , setkeys]=useState('puma')
  const  [data , setdata] =useState()


  const getdata= ()=>{ 
     let url = `https://smentor.herokuapp.com/search/${mystate.skey}`
       fetch(url).then((res)=> res.json())
       .then((res) => {
         console.log(res)
          
          setdata(res)
         console.log("data1"+data[0].name)
         }).catch((err)=>{ console.log(err.message)})
       }

       useEffect(()=>{
         getdata(); 

       },[mystate])

      //  console.log("data"+data.name)
       var x =false
       if(data){
         if(data.lenght===0){
          x = true
         
         }
          
       }
       var newdata = JSON.stringify(data); 
        return(
          <div  className='row '>
            {data&& data.length>0? data.map((ads)=>{ return(
             
             <div className='col-md-4 col-sm-6  my-3'> 
               <Adsitem name={ads.name} headline={ads.headline} desc={ads.primaryText} url={ads.url} action={ads.CTA} imagepath={ads.imageUrl} key={ads._id} />
             </div>
            
            )}):<h3> type something else </h3>}
            {x && <h3> {mystate.skey}</h3>}
            
            
          </div>
          
        )}

export default Ads
