export const  changekey=(skey)=>{ 
    return { 
        payload:{ skey} , 
        type: "ADD_KEY"
    }
}