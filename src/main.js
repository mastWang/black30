import Vue from 'vue'
import App from './App.vue'

//导入饿了吗
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import index from './components/index.vue'
import deltal from './components/deltal.vue'
import userContainer from './components/userContainer.vue'

const routes = [{
    path: '/',
    redirect: '/index'
  }, {
    path: '/index',
    component: index
  },
  {
    path: '/deltal/:id',
    component: deltal
  },
  {
    path: "/user",
    component: userContainer
  }
]

const router = new VueRouter({
  routes
})

import './assets/statics/site/css/style.css'

Vue.config.productionTip = false

//设置axios到原型上 方便共享

import axios from 'axios'
Vue.prototype.$axios = axios;
//定义全局过滤器
//导入
import moment from 'moment'
Vue.filter('formatTime',(value)=>{
  return moment(value).format('YYY年MM月DD日')
})

//设置axios的基础地址
axios.defaults.baseURL = 'http://111.230.232.110:8899';

new Vue({
  render: h => h(App),
  router
}).$mount('#app')