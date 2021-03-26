import * as createpostapi from '../API/index.js';
import * as fetchpostapi from '../API/marketplace.js'
//action creators : fonction that retruns actions




//fetch prod


export const getProd=()=> async(dispatch)=>{
   try {
       const {data}=await fetchpostapi.getProd();
       dispatch({ type: 'FETCH_ALL', payload:data});
   } catch (error) {
       console.log(error.message);
   }
   
}

//creqte prod
export const createProd=(prod)=>async(dispatch)=>{
    try {
        const{data}=await createpostapi.createProd(prod)
        dispatch({type:'CREATE' ,payload:data})
    } catch (error) {
        console.log(error.message)
    }
}