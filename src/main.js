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
path:'/index',
component: index
},
{
path:'/deltal/:id',
component: deltal
},
{
  path:"/user",
  component:userContainer
}
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
