import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import index from './components/index.vue'

const routes = [{
path:'/index',
component: index}
]

const router = new VueRouter({
  routes
})

import  './assets/statics/site/css/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router 
}).$mount('#app')
