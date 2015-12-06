var fs = require('fs')
var editorconfigIndent = require('./')
var editorconfig = fs.readFileSync('.editorconfig', 'utf-8')

var out = editorconfigIndent(editorconfig)
console.log(out)
