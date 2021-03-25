import express from 'express';
import {getProd,CreateProd} from '../Controllers/Api.js';
const router=express.Router();

router.get('/', getProd);
router.post('/', CreateProd);




export default router;