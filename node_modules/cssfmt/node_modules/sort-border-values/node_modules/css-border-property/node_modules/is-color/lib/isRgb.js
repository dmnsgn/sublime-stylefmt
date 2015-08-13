var rgbRegex = require('rgb-regex')

module.exports = function (str) {
  return rgbRegex({exact: true}).test(str)
}
