var test = require('tape')
var isBorderStyle = require('..')

test('none', function (t) {
  var str = "none"
  t.equal(isBorderStyle(str), true)
  t.end()
})

test('solid', function (t) {
  var str = "solid"
  t.equal(isBorderStyle(str), true)
  t.end()
})

test('dotted', function (t) {
  var str = "dotted"
  t.equal(isBorderStyle(str), true)
  t.end()
})

test('hoge', function (t) {
  var str = "hoge"
  t.equal(isBorderStyle(str), false)
  t.end()
})
