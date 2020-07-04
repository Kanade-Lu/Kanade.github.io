import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isLogin:false,
		userInfo:[]
	},
	mutations: {
		Login(state,payload){
			state.isLogin = true;
			state.userInfo = payload.userInfo
		}
		
	},
	actions: {},
	modules: {}
})
