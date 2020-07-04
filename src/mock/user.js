
import Mock from 'mockjs'

function param2Obj(url) {
	const search = url.split('?')[1]
	if (!search) {
		return {}
	}
	return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +
		'"}')
}

var userInfo = []
// let data = Mock.mock({
// 	"username": "Kanade",
// 	"password": "123456",
// 	"email": "@email",
// 	"headImage": "@dataImage('200*200')",
// 	"id|+1":1
// })

userInfo.push(Mock.mock({
	"username": "Kanade",
	"password": "123456",
	"email": "@email",
	"headImage": "@dataImage('200x200')",
	"id|+1":1
}))


export default {
	checkUserInfo: config => {
		const param = config.body;
		console.log(config)
		const mockList = userInfo.find(u => {
			if (u.username == param.username && u.password == param.password) {
				return true
			}
		})
		console.log(mockList)
		return {
			code: 20000,
			data: mockList
		}
	},
	getUserById: (config, res) => {
		const {
			id
		} = param2Obj(config.url)
		console.log("res", res)
		console.log("config", config)
		console.log("id:", id)
		const mockList = userInfo.filter(user => {
			if (user.id == 1) return true
			else return false
		})
		return {
			code: 20000,
			data: mockList[0]
		}
	},

	deleteUser: config => {
		const {
			id
		} = param2Obj(config.url)
		if (!id) {
			return {
				code: -999,
				message: '参数不正确'
			}
		} else {
			let index = userInfo.map(item => item.id).indexOf(parseInt(id))
			userInfo.splice(index, 1)
			return {
				code: 20000,
				data: {
					message: '删除成功'
				}
			}
		}
	},
	getUserInfo: config => {
		const {username,password} = param2Obj(config.url)
		console.log(username,password)
		const mockList = userInfo
		const pageList = mockList.filter((item) => item.username == username && item.password == password)
		
		if(pageList.length <= 0){
			return {
				code:204,
				message:"账号或密码错误"
			}
		}
		else{
			return {
				code: 200,
				data: pageList[0]
			}
		}
		
		

	},



	createUser: config => {
		const {
			username,
			password,
			email,
		} = param2Obj(config.url)

		userInfo.push(Mock.mock({
			"username": username,
			"password": password,
			"email": email,
			"headImage": "@dataImage('200x200')",
			"id":userInfo.length + 1
		}))
		return {
			code: 20000,
			data: {
				message: '添加成功'
			}
		}
	},

	updateUser: config => {
		const {
			id,
			password,
			phone
		} = param2Obj(config.url)
		console.log(config)

		let index = userInfo.map(item => item.id).indexOf(id)
		userInfo[index].password = password
		userInfo[index].phone = phone

		return {
			code: 20000,
			data: {
				message: '编辑成功'
			}
		}
	}


}
