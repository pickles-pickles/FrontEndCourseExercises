/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var com = function (str1, str2) {
  /*
Create Sets to eliminate duplicates inside of each string
    */
  str1 = Array.from(new Set(str1.split(''))).join('')

  str2 = Array.from(new Set(str2.split(''))).join('')

  str3 = ''

  /* 
  Compare each element of the strings.
  No duplicates inside each string anyway
       */
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str1.length; j++) {
      if (str1[i] === str2[j]) {
        str3 += str1[i]
      }
    }
  }
  return str3
}
