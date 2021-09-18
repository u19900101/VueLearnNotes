import Vue from 'vue'
import Vuex from 'vuex'
import { UPDATEINFO } from './mutation-type'

// 1.安装插件
Vue.use(Vuex)

// 创建模块
const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName (state, name) {
      state.name = name
    }
  },
  actions: {
    // 异步操作
    asyncUpdateName (context, name) {
      let msg = '模块a中一部修改,响应成功'
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateName', name)
          resolve(msg)
        }, 1000)
      })
    }
  },
  getters: {
    fullName (state, getters, rootState) {
      return state.name + rootState.count
    }
  }
}
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
  mutations: { // 操作修改state（状态）
    increment (state) { // 增加
      state.count++
    },
    decrement (state) { // 减少
      state.count--
    },
    addCount (state, count) {
      state.count += count
    },
    addStu (state, stu) {
      state.students.push(stu) // 向数组中添加指定的stu
      console.log(state.students.find(s => s.id === stu.id)) // 输出打印查看state中是否有新增stu
    },
    // updateInfo (state, age) {
    //   // console.log(age)
    //   // state.user['ageee'] = age
    //   Vue.set(state.user, 'age', age)
    // },
    [UPDATEINFO] (state, age) {
      // state.user.age = age
      Vue.set(state.user, 'age', 12)
      // 该方法没有响应式，需要使用vue.delete
      // delete state.user.age
      // Vue.delete(state.user, age)// 响应式删除age
      // setTimeout(() => { // 延时模拟异步网络请求
      //   state.user.name = 'lisi'
      // }, 1000)
      state.user.name = 'lisi'
    }
  },
  getters: {
    getStudentCounts: state => {
      return state.students.filter(s => s.age > 20).length
    },
    getStuById: state => id => {
      return state.students.find(s => s.id === id)
    },
    getStuByIdF (state) {
      return function (id) {
        return state.students.find(s => s.id === id)
      }
    }
  },
  actions: {
    // context：上下文
    // 异步操作
    aUpdateInfo (context, name) {
      let msg = '响应成功'
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit(UPDATEINFO, 12)
          resolve(msg)
        }, 1000)
      })
    }
  },
  modules: {
    a: moduleA
  }
})

// 3.导出store对象
export default store
