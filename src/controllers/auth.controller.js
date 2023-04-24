import User from '../models/User.js'
import Joi from '@hapi/joi'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const registerSchema = Joi.object({
  name: Joi.string().min(6).max(255).required(),
  email: Joi.string().min(8).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required(),
  role: Joi.string(),
})

const loginSchema = Joi.object({
  email: Joi.string().min(8).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required(),
})

export const register = async (req, res) => {
  const { name, email, password, role } = req.body

  try {
    const { error } = registerSchema.validate(req.body)
    if (error) return res.status(400).json({ error: error.details[0] })

    const emailAlreadyTaken = await User.findOne({ email })
    if (emailAlreadyTaken)
      return res.status(400).json({
        error: true,
        message: 'There is already a user registered with that email',
      })

    const salt = await bcrypt.genSalt(10)
    const encryptedPassword = await bcrypt.hash(password, salt)

    const user = new User({ name, email, password: encryptedPassword, role })
    const savedUser = await user.save()

    res.status(201).json({ error: null, data: savedUser })
  } catch (error) {
    res.status(400).json({ error })
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const { error } = loginSchema.validate(req.body)
    if (error) return res.status(400).json({ error: error.details[0] })

    const user = await User.findOne({ email })
    if (!user)
      return res
        .status(404)
        .json({ error: true, message: 'Invalid credentials' })

    const matchingPasswords = await bcrypt.compare(password, user.password)
    if (!matchingPasswords) return res.status(400).json('Invalid credentials')

    const token = jwt.sign(
      { ...user._doc, password: null },
      process.env.TOKEN_SECRET,
      {
        expiresIn: 86400,
      },
    )

    res.json({ error: null, data: token })
  } catch (error) {
    res.json({ error })
  }
}
