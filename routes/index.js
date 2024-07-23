import express from 'express'
import { getUserDataFun, userDataFun } from '../comparision optr/index.js'
import { getLogicalDataFun } from '../logical optr/index.js'
const route = express.Router()

route.post('/api/user', userDataFun)
route.get('/api', getUserDataFun)
route.get('/api/logical', getLogicalDataFun)
export default route
