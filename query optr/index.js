import userModel from '../models/userSchema.js'

export const getQueyDataFun = async (req, res) => {
  try {
    const exist = await userModel.find({
      gender: { $exists: true, $type: 'string' },
    })
    const expr = await userModel.find({ $expr: { $gt: ['30', 40] } })
    const regex = await userModel.find({ fullName: { $regex: /^j/ } })
    //   const textIndex=await test.createIndex({gender:"text"})
    // const text = await userModel.find({
    //   $text: {
    //     $search: 'jamil',
    //   },
    // })
    const mod = await userModel.find({ age: { $mod: [2, 0] } })
    res.json({ expr })
  } catch (error) {
    res.json({ error })
  }
}
