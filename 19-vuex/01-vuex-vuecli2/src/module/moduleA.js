export default {
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
