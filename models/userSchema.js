import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  experience: [
    {
      company: {
        type: String,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
      },
    },
  ],
  hoobies: [{ type: 'String', require: true }],
})

const userModel = mongoose.model('User', userSchema)
export default userModel
