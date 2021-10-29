const repeatString = function (str, times) {
  if (times < 0) {
    return 'ERROR'
  }
  let str1 = ''
  for (i = 0; i < times; i++) {
    str1 = str1.concat(str)
  }
  return str1
}

module.exports = repeatString
