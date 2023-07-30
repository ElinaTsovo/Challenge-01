import { Schema, model } from "mongoose";

const passwordSchema = new Schema({
    password:{
        type:String,
        required: true
    }
})