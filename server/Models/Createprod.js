import mongoose from 'mongoose';

const postSchema= mongoose.Schema({
    title:{
        type: String,
        required: true
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


const postProd=mongoose.model('Product',postSchema) ;


export default postProd;

