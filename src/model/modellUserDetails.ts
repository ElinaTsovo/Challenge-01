import { Schema, model } from "mongoose";

const userDetaisSchema = new Schema ({
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },

    contactUser: {
        type: String
      },

      cityUser: {
        type: String
      },
  
      borndayUser: {
        day:{
            type:String,
            required:true
        },
        year:{
            type: String,
            required:false
        },

        month:{
            type:String,
            required:false

        }

        
      },
  
  
}, {timestamps:true})
