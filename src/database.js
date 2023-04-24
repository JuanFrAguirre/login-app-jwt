import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sqehuyi.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`

export const connection = mongoose
  .connect(uri)
  .then((db) => console.log('DB connected successfully\n\n---\n'))
  .catch((err) => {
    console.error(err)
    console.log('DB connection error')
  })
