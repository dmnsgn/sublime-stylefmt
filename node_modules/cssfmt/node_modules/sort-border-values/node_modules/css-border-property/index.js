var isColor = require('is-color')
var isLength = require('is-css-length')
var isStyle = require('is-border-style')

function isWidth (str) {
  return isLength(str) || str === 'thin' || str === 'medium' || str === 'thick'
}

function check (val) {
  if (isColor(val)) return 'color'
  if (isWidth(val)) return 'width'
  if (isStyle(val)) return 'style'

  return null
}

module.exports.parse = function (str) {
  var value = str.split(' ')
  var ret = []
  value.forEach(function (v) {
    var prop = check(v)
    if (prop) {
      var obj = {}
      obj.property = 'border-' + prop
      obj.value = v
      ret.push(obj)
    }
  })
  return ret
}

module.exports.stringify = function (arr) {
  var prop = []
  arr.forEach(function (obj) {
    Object.keys(obj).forEach(function (key) {
      if (key === 'value') prop.push(obj[key])
    })
  })
  return prop.join(' ')
}
