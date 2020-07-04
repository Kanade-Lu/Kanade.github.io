import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'



Vue.use(VueRouter)
	


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/Search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/PunchPoint',
    name: 'PunchPoint',
    component: () => import('../views/PunchPoint.vue')
  },
  {
    path: '/PunchInfo/:punchId',
    name: 'PunchInfo',
    component: () => import('../views/PunchInfo.vue')
  },
  {
    path: '/Record',
    name: 'Record',
    component: () => import('../views/Record.vue')
  },
  {
    path: '/Collection',
    name: 'Collection',
    component: () => import('../views/Collection.vue')
  },
  {
    path: '/Collection',
    name: 'Collection',
    component: () => import('../views/Collection.vue')
  },
  {
    path: '/Message',
    name: 'Message',
    component: () => import('../views/Message.vue')
  },
  {
    path: '/myPunch',
    name: 'myPunch',
    component: () => import('../views/myPunch.vue')
  },
  {
    path: '/OtherUser',
    name: 'OtherUser',
    component: () => import('../views/OtherUser.vue')
  },
  {
    path: '/Personal',
    name: 'Personal',
    component: () => import('../views/Personal.vue')
  },
  {
    path: '/MessageInfo',
    name: 'MessageInfo',
    component: () => import('../views/MessageInfo.vue')
  },
  {
    path: '/AfterSearch',
    name: 'AfterSearch',
    component: () => import('../views/AfterSearch.vue')
  },
  
  {
    path: '/Community',
    name: 'Community',
    component: () => import('../views/community.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
