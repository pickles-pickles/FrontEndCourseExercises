const ftoc = function (far) {
  let celsius = (far - 32) * 0.5556
  if (celsius === 0) {
    return 0
  }
  return Number(celsius.toFixed(1))
}

const ctof = function (celsius) {
  let far = 1.8 * celsius + 32
  if (far === 0) {
    return 0
  }
  return Number(far.toFixed(1))
}

module.exports = {
  ftoc,
  ctof
}
