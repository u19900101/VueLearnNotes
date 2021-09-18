import {UPDATEINFO} from "./mutation-type";
import Vue from 'vue';

export default { // 操作修改state（状态）
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
}
