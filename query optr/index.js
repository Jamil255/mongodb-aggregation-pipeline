import userModel from '../models/userSchema.js'

export const getQueyDataFun = async (req, res) => {
  try {
    const exist = await userModel.find({ gender: { $exists: true,$type: 'string'}})
    res.json({ exist })
  } catch (error) {
    res.json({ error })
  }
}
