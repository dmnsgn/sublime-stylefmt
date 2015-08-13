var keywords = require('css-color-names')

function isKeyword (str) {
  return keywords[str] ? true : false
}

module.exports = isKeyword
