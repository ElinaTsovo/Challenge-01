import { Schema, model } from "mongoose";

const dataUser = new Schema(
  {
    uid: {
      type: String,
      unique: true,
      required: true
    },

    nameUser: {
      type: String,
      required: true,
      min: 4
    },

    emailUser: {
      field: { 
        type: String, 
        required: true,
         min: 4
         },

      verify: {
        type: Boolean,
        required: true,
        default: false
      }
    },

    passwordUser: {
      type: Schema.Types.ObjectId,
      ref: "password",
      required: true
    },

    photoprofileUser: {
      type: String,
      default: null
    },

  },{ timestamps: true });

export const users = model("datauser", dataUser);