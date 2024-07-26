import userModel from '../models/userSchema.js'

export const userDataFun = async (req, res) => {
  try {
<<<<<<< HEAD
    const { fullName, email, password, gender, age, experience, hoobies } =
      req.body
=======
    const { fullName, email, password, gender, age } = req.body
    console.log(fullName)
>>>>>>> 269ed610427d72b11a34f18456d7f071152950a9
    const response = await userModel.create({
      fullName,
      email,
      password,
      gender,
      age,
      experience,
      hoobies,
    })
    res.json(response)
  } catch (error) {
    res.json(error)
  }
}
export const getUserDataFun = async (req, res) => {
  try {
    //   $eq=equalto
    //   $ne=notequalto
    // $lt=lessthen
    // $gt=greaterthen
    // $lte=lessthenequalto
    // $gte=greaterthenequalto
    //   $in,$nin

    const eq = await userModel.find({ age: { $eq: 21 } })
    const ne = await userModel.find({ age: { $ne: 21 } })
    const lte = await userModel.find({ age: { $lte: 90 } })
    const gte = await userModel.find({ gender: { $in: ['male'] } })
    const data = await userModel.find({ gender: { $nin: ['male'] } })
    res.json(data)
  } catch (error) {
    res.json(error)
  }
}
