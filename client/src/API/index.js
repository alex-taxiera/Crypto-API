
import axios from "axios";

const url= "http://localhost:5000/Home";

export const fetchProd=()=> axios.get(url);
export const createProd=(newProd)=>axios.post(url,newProd);