import React from 'react'
import './Searchbox.css'

import {useState} from 'react';
import {changekey} from '../../action/index'

import { useDispatch, useSelector } from 'react-redux';
import Ads from '../Ads/Ads';

const Searchbox = () => {
  const mystate = useSelector( (state)=> state.addkey)
  const dispatch = useDispatch(); 
   
    const [message, setMessage] = useState('');
    const [key , setkey]= useState('')
    const handleChange = event => {
      setMessage(event.target.value);
  
      
    };
    const keyobj = {skey: message}
    const Onsubmit=()=>{ 
      setkey(message)
      dispatch(changekey(keyobj))
      console.log("key ads24 :"+message)
    }
  return (
   
       
    <div className='box_contaier'><div className="box">
    <form name="search"  method="GET" target='_blank'>
        <input type="text"  onChange={handleChange}  value={message} name="search"className="input"  />
        <button type='button' onClick={Onsubmit} className='btn btn-outline-warning'><i className="fa-regular fa-magnifying-glass"> search </i></button>
    </form>



</div>
 {/* <Ads keys={key} /> */}
</div>

  )
}

export default Searchbox