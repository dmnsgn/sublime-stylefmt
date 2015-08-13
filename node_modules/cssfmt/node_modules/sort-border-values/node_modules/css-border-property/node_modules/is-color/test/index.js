var test = require('tape')
var color = require('..')

test('isRgb', function (t) {
  var str = 'rgb(255, 0, 0)'
  t.same(color.isRgb(str), true)
  t.end()
})

test('isRgba', function (t) {
  var str = 'rgba(255, 0, 0, .5)'
  t.same(color.isRgba(str), true)
  t.end()
})

test('isHsl', function (t) {
  var str = 'hsl(123, 45%, 67%)'
  t.same(color.isHsl(str), true)
  t.end()
})

test('isHsla', function (t) {
  var str = 'hsla(123, 45%, 67%, 0.9)'
  t.same(color.isHsla(str), true)
  t.end()
})

test('isHex', function (t) {
  var str = '#123456'
  t.same(color.isHex(str), true)
  t.end()
})

test('isKeyword', function (t) {
  var str = 'tomato'
  t.same(color.isKeyword(str), true)
  t.end()
})

test('isColor', function (t) {
  var str = 'tomato'
  t.equal(color(str), true)
  t.end()
})

test('isColor', function (t) {
  var str = 'currentColor'
  t.equal(color(str), true)
  t.end()
})

test('isColor', function (t) {
  var str = 'currentColor'
  t.equal(color(str), true)
  t.end()
})

test('isColor', function (t) {
  var str = 'inherit'
  t.equal(color(str), true)
  t.end()
})

test('isColor', function (t) {
  var str = 'transparent'
  t.equal(color(str), true)
  t.end()
})
