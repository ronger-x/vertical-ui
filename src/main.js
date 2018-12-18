import Vue from 'vue'
import ElementUI from 'element-ui'
import vueAxios from './plugins/axios'
import store from './store'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/reset.css'
import App from './App.vue'

Vue.use(ElementUI, vueAxios());

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
