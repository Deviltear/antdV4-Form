
const debounce = (fn, timeout) => {
  let timerId
  return function () {
    timerId && clearTimeout(timerId)
    timerId = setTimeout(() => {
      fn.apply(this, arguments)
    }, timeout);
  }
}

const throttle = (fn, timeout) => {
  let timerId
  return function () {
    if (!timerId) {
      setTimeout(() => {
        timerId = null

        fn.apply(this, arguments)

      }, timeout);
    }

  }
}