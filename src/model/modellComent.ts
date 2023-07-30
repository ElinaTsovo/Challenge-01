import { Schema, model } from "mongoose";
import {post} from '../model/modellPost'

const dataComment = new Schema({
    author:{
        type:String,
        required: true
    },
    
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    comentt:{
        type:String,
        required: true
    },

    postComent:{
        type:Schema.Types.ObjectId,
        required:true,
        ref: 'post'
    },

}, {timestamps:true})

export const coment = model('comment', dataComment)