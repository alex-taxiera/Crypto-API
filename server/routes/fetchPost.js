import express from 'express';
import {getProd} from '../Controllers/Api.js';
const FetchPostRouter=express.Router();


FetchPostRouter.get('/', getProd);





export default FetchPostRouter;