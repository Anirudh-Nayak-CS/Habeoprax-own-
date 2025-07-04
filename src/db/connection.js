import mongoose from "mongoose"

const connection_string=process.env.MONGODB_URI;

const connectToDB=async ()=> {
  try {
 const connection=await mongoose.connect(connection_string)
    if(!connection) {
      throw new Error("Could not connect to DB.")
    }
   console.log("DB Connected")

  }
  catch (e) {
    console.log(e);
    throw e;
  }
 
}
export default connectToDB