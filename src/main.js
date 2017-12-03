import Vue from 'vue'
// import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import router from './router'
import store from './store'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.config.devtools = process.env.NODE_ENV === 'development'

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
