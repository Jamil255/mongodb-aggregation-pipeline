import userModel from '../models/userSchema.js'

export const getArrayQueryFun = async (req, res) => {
  try {
    const querys = await userModel.find({
      'experience.company': 'apple',
    })
    const data = await userModel.countDocuments({
      'experience.company': 'apple',
    })
    //   size:only take number
    const experinceLength = await userModel.find({ experience: { $size: 3 } })
    //   or
    // const sizeData = await userModel.find({
    //   $and: [
    //     { experience: { $exists: true } },
    //     { $expr: { $gte: [{ $size: '$experince' }, 3] } },
    //   ],
    // })
    //   find the pattern "race and codind is not finding coding and race"
    const findhoobies = await userModel.find({ hoobies: ['', 'coding'] })
    const findhoob = await userModel.find({
      hoobies: { $in: ['circket', 'coding'] },
    })
    const findhoobs = await userModel.find({
      hoobies: { $all: ['race', 'coding'] },
    })
    const findSpecificFields = await userModel.find({
      $and: [
        { 'experience.company': 'apple' },
        { 'experience.duration': { $gt: 2 } },
      ],
    })
    const findSpecificFieldset = await userModel.find({
      experience: { $elemMatch: { duration: { $gt: 2} }, company: 'apple' },
    })
    res.json({ findSpecificFieldset })
  } catch (error) {
    res.json({ error: error })
  }
}
