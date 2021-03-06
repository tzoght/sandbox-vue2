import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes';
import BootstrapVue from 'bootstrap-vue'


Vue.use(VueRouter);
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Create a VueRouter passing routes object, in ES6 you can use the following
// routes if you have exported routes
// new VueRouter({routes});
const router = new VueRouter({
  routes: routes, // defined in routes.js
  mode: 'history'
});


// In ES6 you can use this instead
// new Vue({
//   el: '#app',
//   router, // use the const vueRoutes just created
//   render: h => h(App)
// })
new Vue({
  el: '#app',
  router: router, // use the const vueRoutes just created
  render: h => h(App)
})
