const leapYears = function (year) {
  if (year % 4 === 0) {
    //code works without the if, but with it it is easier to understand
    if (year % 100 === 0 && year % 400 === 0) {
      return true
    } else if (year % 100 === 0 && year % 400 !== 0) {
      return false
    }
    return true
  }
  return false
}

module.exports = leapYears
