const initialState={skey:""}; 
const addkey = (state = initialState , action )=>{ 

          switch (action.type){ 
            case 'ADD_KEY': return state = action.payload.skey; 
            
            default: return state; 
          }


}

export default addkey;