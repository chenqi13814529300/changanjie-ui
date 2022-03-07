import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import API from './api'
import 'element-ui/lib/theme-chalk/index.css'
import crypto from "crypto";
import * as echarts from 'echarts'
import '../public/static/theme/chalk';
Vue.prototype.$echarts = echarts
import ElementUI from 'element-ui'
Vue.prototype.$API = API
Vue.prototype.$crypto = crypto

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
