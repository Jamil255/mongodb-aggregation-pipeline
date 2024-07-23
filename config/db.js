import mongoose, { connect } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGOBD_URL)
    console.log(`Connecting to${connect.connection.host}`)
  } catch (error) {
    console.log(error.message)
  }
}
export default connectDb
