import {
	Random
} from 'mockjs'
import Mock from 'mockjs'

function param2Obj(url) {
	const search = url.split('?')[1]
	if (!search) {
		return {}
	}
	return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +
		'"}')
}
Random.extend({
	tags: function() {
		var tags = ['Work', 'Home Improvement', 'Vacation', 'Food', 'Drawers', 'Shopping', 'Food', 'Drawers', 'Shopping']
		return this.pick(tags)
	}
})
Random.tags()
let data = Mock.mock({
	'pointList|8': [{
		"punchUserId|+1": 1, //id自增长
		"punchId|+1": 1,
		"introduce": "@paragraph",
		"title": "@ctitle",
		"place": "@county(true)",
		"content": "@cparagraph",
		"tags": "@tags",
		"time": "@datetime",
		"placeImg": "@dataImage('1280*720')"

	}]
})

export default {
	getGoodsInfoById: (config) => {
		let {
			id
		} = param2Obj(config.url)
		console.log("id:", id)
		let mockList = data.pointList.filter(user => {
			if (user.id == id) return true
			else return false
		})
		return {
			code: 20000,
			data: mockList[0]
		}
	},

	deleteGoods: config => {
		let {
			id
		} = param2Obj(config.url)
		if (!id) {
			return {
				code: -999,
				message: '参数不正确'
			}
		} else {
			let index = data.pointList.map(item => item.id).indexOf(parseInt(id))
			if (index == -1) {
				return {
					code: 20000,
					data: {
						message: '删除成功'
					}
				}
			}
			console.log(index)
			data.pointList.splice(index, 1)
			return {
				code: 40000,
				data: {
					message: '找不到相应的数据'
				}
			}
		}
	},
	getpointList: () => {
		// let {
		// 	page = 1, limit = 20
		// } = param2Obj(config.url)
		let mockList = data.pointList
		// console.log(pointList)
		// let pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
		return {
			code: 20000,
			// count: mockList.length,
			data: mockList
		}

	},



	createGoods: config => {
		let {
			name,
			content,
			icon,
			price
		} = param2Obj(config.url)

		data.pointList.push({
			id: data.pointList.length + 1,
			name: name,
			price: price,
			content: content,
			icon: icon
		})
		return {
			code: 20000,
			data: {
				message: '添加成功'
			}
		}
	},

	updateGoods: config => {
		const {
			id,
			name,
			content,
			icon,
			price
		} = param2Obj(config.url)

		let index = data.pointList.map(item => item.id).indexOf(parseInt(id))

		data.pointList[index].name = name
		data.pointList[index].content = content
		data.pointList[index].icon = icon
		data.pointList[index].price = price

		return {
			code: 20000,
			data: {
				message: '编辑成功'
			}
		}
	}


}
