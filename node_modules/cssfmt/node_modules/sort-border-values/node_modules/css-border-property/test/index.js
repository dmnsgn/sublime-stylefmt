var test = require('tape')
var border = require('..')

test('parse', function (t) {
  var actual = border.parse('1px solid #eee')
  var expected = [ { property: 'border-width', value: '1px' }, { property: 'border-style', value: 'solid' }, { property: 'border-color', value: '#eee' } ]
  t.same(actual, expected)
  t.end()
})

test('parse', function (t) {
  var actual = border.parse('1px solid')
  var expected = [ { property: 'border-width', value: '1px' }, { property: 'border-style', value: 'solid' } ]
  t.same(actual, expected)
  t.end()
})

test('keyword width', function (t) {
  var actual = border.parse('thin solid #eee')
  var expected = [ { property: 'border-width', value: 'thin' }, { property: 'border-style', value: 'solid' }, { property: 'border-color', value: '#eee' } ]
  t.same(actual, expected)
  t.end()
})

test('stringify', function (t) {
  var actual = border.stringify([
    { property: 'border-width', value: '1px' },
    { property: 'border-style', value: 'solid' },
    { property: 'border-color', value: '#fff' },
  ])
  var expected = '1px solid #fff'
  t.same(actual, expected)
  t.end()
})

test('stringify', function (t) {
  var actual = border.stringify([
    { property: 'border-width', value: '1px' },
    { property: 'border-style', value: 'solid' },
  ])
  var expected = '1px solid'
  t.same(actual, expected)
  t.end()
})

test('stringify', function (t) {
  var parsed = border.parse('1px solid #eee')
  var actual = border.stringify(parsed)
  var expected = '1px solid #eee'
  t.same(actual, expected)
  t.end()
})
