import { Schema, model } from "mongoose";

const dataComment = new Schema({
    name:{
        type:String,
        required: true
    },

    comentt:{
        type:String,
        required: true
    },

    date:{
        type:Date,
        default: Date.now
    }
})

export const coment = model('comment', dataComment)