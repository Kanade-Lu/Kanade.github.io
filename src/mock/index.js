

import Mock from 'mockjs'

import userApi from './user'
import pointApi from './point.js'


// Mock.mock('/api/user/checkUser','post',rootUserApi.checkUserInfo)
// Mock.mock(RegExp('/api/user/getUser'+ ".*"), 'get', rootUserApi.getUserInfo)
// Mock.mock(RegExp('/api/user/add'+ ".*"), 'get', rootUserApi.createUser)
// Mock.mock(RegExp('/api/user/edit'+ ".*"), 'get', rootUserApi.updateUser)
// Mock.mock(RegExp('/api/user/mockList'+ ".*"),'get',rootUserApi.getUserById)
// Mock.mock(RegExp('/api/user/delete'+ ".*"),'get',rootUserApi.deleteUser)



Mock.mock(RegExp('/point/getGoodsList'+ ".*"), 'get', pointApi.getGoodsList)
Mock.mock(RegExp('/point/add'+ ".*"), 'get', pointApi.createGoods)
Mock.mock(RegExp('/point/edit'+ ".*"), 'get', pointApi.updateGoods)
Mock.mock(RegExp('/point/getGoodsById'+ ".*"),'get',pointApi.getGoodsInfoById)
Mock.mock(RegExp('/point/delete'+ ".*"),'get',pointApi.deleteGoods)
Mock.mock(RegExp('/user/get'+ ".*"),'get',userApi.getUserInfo)
Mock.mock(RegExp('/user/create'+ ".*"),'get',userApi.createUser)

