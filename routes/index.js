import express from 'express'
import { getUserDataFun, userDataFun } from '../comparision optr/index.js'
const route = express.Router()

route.post('/api/user', userDataFun)
route.get('/api', getUserDataFun)
export default route
