import express from 'express'
import { getUserDataFun, userDataFun } from '../comparision optr/index.js'
import { getLogicalDataFun } from '../logical optr/index.js'
import { getQueyDataFun } from '../query optr/index.js'
import { getArrayQueryFun } from '../Querying Arrays/index.js'
const route = express.Router()

route.post('/api/user', userDataFun)
route.get('/api', getUserDataFun)
route.get('/api/logical', getLogicalDataFun)
route.get('/api/query', getQueyDataFun)
route.get('/api/array', getArrayQueryFun)
export default route
