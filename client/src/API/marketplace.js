import axios from "axios";

const url= "http://localhost:5000/marketplace";

export const getProd=()=> axios.get(url);
