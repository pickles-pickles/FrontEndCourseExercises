const sumAll = function (num1, num2) {
  if (
    isNaN(num1) ||
    isNaN(num2) ||
    typeof num1 == 'string' ||
    typeof num2 == 'string' ||
    num1 < 0 ||
    num2 < 0
  ) {
    return 'ERROR'
  }
  min = Math.min(num1, num2)
  max = Math.max(num1, num2)
  console.log(min, max)
  let sum = 0
  for (let i = min; i <= max; i++) {
    sum += i
  }
  return sum
}

module.exports = sumAll
