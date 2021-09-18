import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from '../module/moduleA'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
// 1.安装插件
Vue.use(Vuex)

// 创建模块

// 2.创建对象
const store = new Vuex.Store({
  state: { // 状态集合
    count: 0, // 具体的状态数据
    students: [
      {id: 110, name: 'zzz', age: '18'},
      {id: 111, name: 'ttt', age: '20'},
      {id: 112, name: 'yyy', age: '22'},
      {id: 113, name: 'zty', age: '25'}
    ],
    user: {
      name: 'zhangsan',
      sex: '男'
    }
  },
  mutations,
  getters,
  actions,
  modules: {
    a: moduleA
  }
})

// 3.导出store对象
export default store
