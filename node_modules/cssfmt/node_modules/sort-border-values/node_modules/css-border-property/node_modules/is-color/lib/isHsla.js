var hslaRegex = require('hsla-regex')

function isHsla (str) {
  return hslaRegex({exact: true}).test(str)
}

module.exports = isHsla
