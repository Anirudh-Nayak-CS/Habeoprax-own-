import mongoose,{Schema} from "mongoose"

const habitSchema=new Schema({
 userID:{
   type:mongoose.Schema.Types.ObjectId,
   ref:'User',
   required:true,
 },
 title:{
  type:String,
  required:true,
  trim:true,
 },
 duration:{
  type:String,
  required:true,
 },
 time: {
  type:String,
  required:true,
 },
 done :{
  type:Boolean,
  required:true,
 },
 icon: {
    type:String,
  required:true,
 },
 days: {
  type:[String],
  required:true,
 },
 completedAt:{
  type:Date,
  defualt:null,
 },
},{timestamps:true})

export const Habit=mongoose.model('Habit',habitSchema)
