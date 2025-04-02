import mongoose from "mongoose";
import { Schema } from "mongoose";
import { model } from "mongoose";
import { string } from "zod";


mongoose.connect("mongodb+srv://nitinyadav484220:dhB5JqYv8LbnffVT@cluster0.aq9li.mongodb.net/second-brain")

const userSchema = new Schema({
    username:{type:String ,unique:true },
    password:String
})


const contentSchema = new Schema({
     title:{type:String},
    link:{type:String },
    tag:[{type:mongoose.Types.ObjectId ,  ref: "Tag"}],
    type:String,
    userId:{type:mongoose.Types.ObjectId,ref:"User" , required:true}
})

const linkSchema = new Schema({
    hash:{type:String , required:true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true,unique:true },
   
})


export const userModel  =  model( "User" , userSchema);

export const ContentModel = model("Content" , contentSchema)

export const LinkModel = model("Link" , linkSchema);