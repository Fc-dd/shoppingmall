const CALL_NAME = 'ed'

class Bus {
  constructor() {
    this._events = new Map()

    // this.$on = this.on
    // this.$off = this.off
    // this.$on = this.on
    // this.$on = this.on
  }
  on(name, fn) {
    // 已经存在的 
    if (this._events.has(name)) {
      this._events.get(name).push(fn)
    }
    // 不存在
    else {
      this._events.set(name, [fn])
    }

    // 每次订阅的时候都去触发一次
    this.emit(name + CALL_NAME)
  }
  emit(name, args = [], isWait = false) {
    // 判断这个name是否已经存在,如果不存在就开起等待
    if (!this._events.get(name)?.length) {
      if (isWait) {
        this.once(name + CALL_NAME, () => {
          this.emit(name, args)
        })
      }
    } else {
      this._events.get(name).forEach((fn) => {
        fn(...args)
      })
    }
  }
  off(name, fn) {
    const onFns = this._events.get(name) || []
    this._events.set(
      name,
      onFns.filter((f) => f === fn),
    )
  }
  once(name, fn) {
    this.on(name, () => {
      fn()
      this.off(name, fn)
    })
  }
}

// 测试
const bus = new Bus()

bus.emit('aaa', ['a'], true)

bus.on('aaa', (a) => {
  console.log(a)
  console.log('aaa is call')
})

// export default bus
