/*
I HANDLE THE PROBLEM AS AN ARRAY ROTATION PROBLEM
*/

const caesar = function (str, step) {
  var smallLetters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ]
  var capitalLetters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ]
  const last = str.length - 1
  const len = smallLetters.length
  let encryptedStr = []

  for (let i = 0; i <= last; i++) {
    if (smallLetters.includes(str[i])) {
      encryptedStr[i] =
        smallLetters[(len + smallLetters.indexOf(str[i]) + step) % len]
    } else if (capitalLetters.includes(str[i])) {
      encryptedStr[i] =
        capitalLetters[(len + capitalLetters.indexOf(str[i]) + step) % len]
    } else {
      encryptedStr[i] = str[i]
    }
  }
  encryptedStr = encryptedStr.join('')
  return encryptedStr
  /* 
  SOME FAILED ATTEMPT TO USE UNICODE CODES.
  I KEEP IT HERE TO REMEMBEER THAT DATA STRUCTURES AND ALGORYTHMS ARE VITAL
  
  let encryptedCode
  const codeFor_a = 65
  const codeFor_A = 97
  const codeFor_z = 90
  const codeFor_Z = 122
  let encryptedStr = ''

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i)

    if (
      code < codeFor_a &&
      code > codeFor_z &&
      code < codeFor_A &&
      code > codeFor_Z
    ) {
      encryptedCode === code
    } else {
      if (
        code >= codeFor_a &&
        code <= codeFor_z &&
        (code + step > codeFor_z || code + step < codeFor_a)
      ) {
        encryptedCode = codeFor_a + (code % codeFor_a)
      } else if (
        code >= codeFor_A &&
        code <= codeFor_Z &&
        (code + step > codeFor_Z || code + step < codeFor_A)
      ) {
        encryptedCode = codeFor_A + (code % codeFor_A)
      } else {
        encryptedCode = code + step
      }
    }

    encryptedLetter = String.fromCharCode(encryptedCode)
    encryptedStr += encryptedLetter
  }
  str = encryptedStr
  return str */
}

module.exports = caesar
