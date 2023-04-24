import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    email: {
      type: String,
      required: true,
      min: 8,
      max: 255,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    role: {
      type: String,
      default: 'user',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export default model('User', userSchema)
