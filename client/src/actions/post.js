import * as api from '../API';

//action creators : fonction that retruns actions


//fetch prod
export const getProd=()=> async(dispatch)=>{
   try {
       const {data}=await api.fetchProd();
       dispatch({ type: 'FETCH_ALL', payload:data});
   } catch (error) {
       console.log(error.message);
   }
   
    
   
}

//creqte prod
export const createProd=(prod)=>async(dispatch)=>{
    try {
        const{data}=await api.createProd(prod)
        dispatch({type:'CREATE' ,payload:data})
    } catch (error) {
        console.log(error.message)
    }
}