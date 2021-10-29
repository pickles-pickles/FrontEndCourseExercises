const fibonacci = function (x) {
  if (+x < 0) {
    return 'OOPS'
  }

  x = +x
  let fib = []

  fib[0] = 0
  fib[1] = 1
  for (let i = 2; i <= x; i++) {
    // Next fibonacci number = previous + one before previous

    fib[i] = fib[i - 2] + fib[i - 1]
  }
  return fib[x]
}

module.exports = fibonacci
