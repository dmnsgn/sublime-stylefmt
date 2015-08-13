module.exports = function (str) {
  var length =  /^(\+|-)?([0-9]*\.)?[0-9]+(em|ex|ch|rem|vh|vw|vmin|vmax|px|mm|cm|in|pt|pc|%)$/i
  var zero =  /^(\+|-)?(0*\.)?0+$/

  return length.test(str) || zero.test(str)
}
