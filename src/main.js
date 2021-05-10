import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Users from './components/Users'
import User from './components/User'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {path: '/users', name:"users", component: Users},
  {path: '/user/:id?', name:"user", component: User},
  {path: '/', component: Home},
  {path: '/*', component: Home}
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
