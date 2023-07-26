import { Schema,model } from "mongoose";

const dataUser = new Schema({
        nameUser:{
            type:String,
            required:true
        },

        emailUser:{
            type:String,
            required:true
        },

        contactUser:{
            type:String,
            required:true
        },

        cityUser:{
            type:String,
            required:true
        },

        passwordUser:{
            type:String,
            required: true
        },

        borndayUser:{
            type:String,
            required: true
        },

        profileUser:{
            type:String,
        }

        
}, {timestamps:true})

export const user = model ('datauser', dataUser)