import mongoose from 'mongoose';

const postSchema= mongoose.Schema({
    title:{
        type: String,
       
    },
desc:{
        type: String,
        required: true
    },
image:{
        type: String,
        required: true
    },
state:{
        type: String,
        required: true
    },
    date_creation:{
        type:Date,
        default :new Date(),
        required:true,
    }
/*exclusive:{
        type: Boolean,
        required: true
    },
   market:{
        type: String,
        required: true
    },
*/
})


const postProd=mongoose.model('Post',postSchema) ;


export default postProd;

