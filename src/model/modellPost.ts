import { Schema, model } from "mongoose";

const dataPost = new Schema({
  postoTitle: {
    type: String,
    required: true,
  },
  postPhoto: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

export const post = model('post', dataPost)