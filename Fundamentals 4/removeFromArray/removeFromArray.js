const removeFromArray = function (arr, ...values) {
  //get args in an arry
  let args = Array.from(arguments)

  let argsArr = []
  let filteredArr = []
  //get in an array only the args needed to be removed
  for (let i = 1; i < args.length; i++) {
    argsArr.push(args[i])
  }
  //get the intersection of the arrays
  // use the ! to get the elements that are not in the intersection
  filteredArr = arr.filter(x => !argsArr.includes(x))
  return filteredArr
}

module.exports = removeFromArray
