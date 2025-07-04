import 'dotenv/config.js'; 
import connectToDB from './db/connection.js';
import express from "express"

const app=express()

connectToDB()
.then ( ()=> {
  app.listen(process.env.PORT||5000,()=> {
    console.log(`listening to port ${process.env.PORT}`)
  })
})
.catch((e)=> {
  console.log("failed to connect to db")
  throw e
})