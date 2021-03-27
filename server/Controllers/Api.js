import PostProdApi from '../Models/CreateProd.js'

export const getProd= async  ( req, res)=>{
    try {
        const result= await PostProdApi.find();
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
        }
}



export const CreateProd= async (req,res)=>{
    const body=req.body;
        const newprod=new PostProdApi(body); 
    try {
       await newprod.save();
       res.status(201).json(newprod);
    } catch (error) {
        console.log(error.message);
    }
}


