var border = require('css-border-property')
var parse = border.parse
var stringify = border.stringify

module.exports = function (values, fmt) {
    var result = parse(values)
    var width, style, color

    result.forEach(function (decl, i) {
        switch (decl.property) {
            case 'border-width':
                width = decl.value
                break
            case 'border-style':
                style = decl.value
                break
            case 'border-color':
                color = decl.value
                break
        }
    })

    if (!fmt) fmt = 'wsc'

    var parsed
    switch (fmt) {
        case 'wsc':
            parsed = [width, style, color]
            break
        case 'wcs':
            parsed = [width, color, style]
            break
        case 'swc':
            parsed = [style, width, color]
            break
        case 'scw':
            parsed = [style, color, width]
            break
        case 'cws':
            parsed = [color, width, style]
            break
        case 'csw':
            return [color, style, width]
            break
    }

    return parsed.join(' ')
}
