import userModel from '../models/userSchema.js'

export const getLogicalDataFun = async (req, res) => {
  try {
    const or = await userModel.find({
      $or: [{ age: { $lte: 30 } }, { age: { $lte: 100 } }],
    })
    const nor = await userModel.find({
      $nor: [{ age: { $eq: 25 } }, { age: { $eq: 100 } }],
    })
      const and=await userModel.find({$and:[{age:{$lte:30}},{gender:"male"}]})
    res.json({ and })
  } catch (error) {
    res.json({ error })
  }
}
