import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import Router from './routes/Postprod.js'; 

const app=express();

app.use(bodyParser.json({limit : "30mb", extended : true}));
app.use(bodyParser.urlencoded({limit : "30mb", extended : true}));
app.use(cors());
app.use('/Home', Router);

const CNX_URL="mongodb+srv://khalilbensaid:9847123@pfecluster.zq21k.mongodb.net/Matching-App?retryWrites=true&w=majority";
const PORT=process.env.PORT || 5000;
mongoose.connect(CNX_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=>console.log(`Servier is Runnig ${PORT}` )))
.catch((error)=>console.log(error.message));
mongoose.set('useFindAndModify',false);
