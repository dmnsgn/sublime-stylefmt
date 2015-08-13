module.exports = function (str) {
  var value = /^(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)$/i
  return value.test(str)
}
