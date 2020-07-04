import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuelidate from 'vuelidate'

import axios from 'axios'
import VueAxios from 'vue-axios'
import './mock/index.js'
Vue.use(VueAxios, axios)
if (process.env.MOCK) {    // 判断是否为mock模式
  require('./mock/index.js')
}
Vue.use(Vuelidate)
// import '.assets/style/reset.css'
Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')
