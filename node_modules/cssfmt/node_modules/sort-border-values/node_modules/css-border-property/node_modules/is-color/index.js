var isRgb = require('./lib/isRgb')
var isRgba = require('./lib/isRgba')
var isHsl = require('./lib/isHsl')
var isHsla = require('./lib/isHsla')
var isHex = require('./lib/isHex')
var isKeyword = require('./lib/isKeyword')
var isInherit = require('./lib/isInherit')
var isCurrentColor = require('./lib/isCurrentColor')
var isTransparent = require('./lib/isTransparent')


module.exports = function isColor (str) {
  return isRgb(str) || isRgba(str) || isHsl(str) || isHsla(str) || isHex(str) || isKeyword(str) || isInherit(str) || isCurrentColor(str) || isTransparent(str)
}

module.exports.isRgb = isRgb
module.exports.isRgba = isRgba
module.exports.isHsl = isHsl
module.exports.isHsla = isHsla
module.exports.isHex = isHex
module.exports.isKeyword = isKeyword
module.exports.isInherit = isInherit
module.exports.isCurrentColor = isCurrentColor
module.exports.isTransparent = isTransparent
