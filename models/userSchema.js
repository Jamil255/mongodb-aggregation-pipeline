import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  fullName: {
    type: 'String',
    require: 'true',
  },
  email: {
    type: 'String',
    require: 'true',
  },
  password: {
    type: 'String',
    require: 'true',
  },
  gender: {
    type: 'String',
    require: 'true',
  },

  age: {
    type: 'Number',
    require: 'true',
  },
})
const userModel = mongoose.model('user', userSchema)
export default userModel
