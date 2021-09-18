import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {request} from "./network/request";

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  // router
}).$mount('#app')

request({
  url: '/home/multidata/mk'
}).then(res => {
  console.log("main.js 中获取到的数据 ",res);
}).catch(err =>{
  console.log(err);
})


