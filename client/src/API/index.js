
import axios from "axios";

const url= "http://localhost:5000/profile";


export const createProd=(newProd)=>axios.post(url,newProd);