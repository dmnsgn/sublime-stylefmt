var test = require('tape')
var sort = require('..')

var value = '#ddd 1px solid'

test('default', function (t) {
    var actual = sort(value)
    var expected = '1px solid #ddd'
    t.same(actual, expected)
    t.end()
})

test('default', function (t) {
    var actual = sort(value, 'swc')
    var expected = 'solid 1px #ddd'
    t.same(actual, expected)
    t.end()
})
