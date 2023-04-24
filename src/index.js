import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import db from './database'
import authRouter from './routes/auth.routes'
import adminRouter from './routes/admin.routes'

console.clear()
dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(morgan('dev'))
app.use(cors('*'))

app.use('/api/auth', authRouter)
app.use('/api/admin', adminRouter)

app.listen(PORT, () => {
  console.log(`\n---\n\nServer running on port ${PORT}`)
})
