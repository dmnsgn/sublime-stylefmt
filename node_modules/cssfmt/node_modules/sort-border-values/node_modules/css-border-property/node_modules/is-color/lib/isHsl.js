var hslRegex = require('hsl-regex')

function isHsl (str) {
  return hslRegex({exact: true}).test(str)
}

module.exports = isHsl
