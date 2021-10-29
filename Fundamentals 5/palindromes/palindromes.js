const palindromes = function (str) {
  let newStr = ''

  //lowercase
  str = str.toLowerCase()

  //remove punctuation
  str = str.replace(/[^\w\s]|_/g, '')
  str = str.replace(/\s+/g, '')

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
    if (str[str.length - 1 - i] === str[i]) {
      continue
    } else return false
  }

  return true
}

module.exports = palindromes
