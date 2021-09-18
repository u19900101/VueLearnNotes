import {UPDATEINFO} from "./mutation-type";

export default  {
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
}
