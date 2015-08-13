var test = require('tape')
var isLength = require('..')

test('isLength', function (t) {
  var str = '10px'
  t.same(isLength(str), true)
  t.end()
})

test('isLength', function (t) {
  var str = '10'
  t.same(isLength(str), false)
  t.end()
})

test('isLength', function (t) {
  var str = '0'
  t.same(isLength(str), true)
  t.end()
})

test('isLength', function (t) {
  var str = '0vw'
  t.same(isLength(str), true)
  t.end()
})
