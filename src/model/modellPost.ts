import { Schema, model } from "mongoose";

const dataPost = new Schema({
  author:{
    type:String,
    required:true
  },

  userID:{
    type:Schema.Types.ObjectId,
    ref: 'user'
  },

  postTitle: {
    type: String,
    required: true,
  },

  postPhoto: {
    type: String,
    required: true,
  },

  PostLike: [{
    type:Schema.Types.ObjectId,
    ref: 'user',
    required:false
  }],

  coments:[{
    type:Schema.Types.ObjectId,
    ref: 'modellComent',
    required:false
  }],

  likesCouter:{
    type:Number,
    min:0,
    default:0,
    required:false
  }

}, {timestamps:true});

export const post = model('post', dataPost)