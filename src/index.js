import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import { connection } from './database.js'
import authRouter from './routes/auth.routes.js'
import adminRouter from './routes/admin.routes.js'

console.clear()
dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(morgan('dev'))
app.use(cors('*'))

app.get('/', (req, res) => {
  res.redirect('/api')
})
app.get('/api', (req, res) => {
  res.json({ error: null, message: 'Welcome!' })
})
app.use('/api/auth', authRouter)
app.use('/api/admin', adminRouter)

app.listen(PORT, () => {
  console.log(`\n---\n\nServer running on port ${PORT}`)
})
