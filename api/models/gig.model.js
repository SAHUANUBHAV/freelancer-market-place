import mongoose from 'mongoose';
const { Schema } = mongoose;

const GigSchema = new Schema({
    userId:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    totalStars:{
        type:String,
        required:true,
    },
    starNumber:{
        type:Number,
        default:0,
    },
    cat:{
        type:Number,
        default:0,
    },
    price:{
        type:Number,
        default:0,
    },
    cover:{
        type:String,
        required:true,
    },
    images:{
        type:[String],
        required:true,
    },
    images:{
        type:[String],
        required:true,
    },
    shortTitle :{
        type:[String],
        required:true,
    },
    shortDesc :{
        type:String,
        required:true,
    },
    deliveryTime:{
        type:Number,
        default:0,
    },
    revisionNumber :{
        type:Number,
        default:0,
    },
    features :{
        type:[String],
        required: false,
    },
    revisionNumber :{
        type:Number,
        default:0,
    },
    sales :{
        type:Number,
        default:0,
    },
},{
    timestamps:true
});
export default mongoose.model("Gig",GigSchema)