var fs = require('fs')

module.exports = function (input) {
    const NEW_LINE =  10

    var pos = 0
    var length = input.length
    var tmp = []
    var lines = []
    var allConf = []

    while (pos < length) {
        code = input.charCodeAt(pos)

            if (code === NEW_LINE) {
                var str = tmp.join('')
                    if (str !== '') {
                        lines.push(str)
                    }
                tmp = []
            }
            else {
                tmp.push(input[pos])
            }

        pos++
    }

    lines.forEach(function (line, i) {
        if (line.match(/^\[\*\]$/)) {
            var next = lines[++i]
            while (!next.match(/^\[/)) {
                allConf.push(next)
                next = lines[i++]
            }
        }
    })


    var indentSize = []
    allConf.forEach(function (conf) {
        if (conf.match(/indent_size/)) {
            var length = conf.length
            var pos = 0
            var flag = false

            while (pos < length) {
                if (flag) {
                    indentSize.push(conf[pos])
                }
                if (conf[pos] === '=') {
                    flag = true
                }
                pos++
            }
        }
    })
    indentSize = indentSize.join('').trim() - 0

    var indentStyle = []
    allConf.forEach(function (conf) {
        if (conf.match(/indent_style/)) {
            var length = conf.length
            var pos = 0
            var flag = false
            while (pos < length) {
                if (flag) {
                    indentStyle.push(conf[pos])
                }
                if (conf[pos] === '=') {
                    flag = true
                }
                pos++
            }
        }
    })
    indentStyle = indentStyle.join('').trim()


    if (indentSize.length === 0) {
        indentSize = null
    }

    if (indentStyle.length === 0) {
        indentStyle = null
    }


    return {
        indentSize: indentSize,
        indentStyle: indentStyle
    };
}
