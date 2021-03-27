import express from 'express';
import {getProd,CreateProd} from '../Controllers/Api.js';
const PostRouter=express.Router();


PostRouter.post('/', CreateProd);


export default PostRouter;