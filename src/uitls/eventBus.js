const CALL_NAME = 'My'
class Bus {
  constructor() {
    this.list = new Object()
  }
  on(name, fn) {
    name in this.list ? this.list[name].push(fn) : (this.list[name] = [fn])
    // 每次订阅调用emit
    this.emit(name + CALL_NAME, null, false)
  }
  emit(name, data, isWait = true) {
    // 判断name是否存在 如果不存在就开启等待
    if (name in this.list) {
      // 存在的话执行里面的所有函数
      this.list[name].forEach((f) => f(data))
    } else {
      // 开起等待
      isWait &&
        this.once(name + CALL_NAME, () => {
          this.emit(name, data, false)
        })
    }
  }
  // once (name, fn) {
  //   this.on(name, fn)
  //   this.off(name, fn)
  // }
  once(name, fn) {
    this.on(name, () => {
      fn()
      this.off(name, fn)
    })
  }
  off(name, fn) {
    if (name in this.list) {
      this.list[name] = this.list[name].filter(f => f === fn)
      !this.list[name].length && delete this.list[name]
    }
  }
}

export default new Bus()