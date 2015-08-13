/*!
 * hex-color-regex <https://github.com/regexps/hex-color-regex>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

module.exports = function hexColorRegex (opts) {
  opts = opts && typeof opts === 'object' ? opts : {}

  return opts.strict ? /^#([a-f0-9]{6}|[a-f0-9]{3})\b$/i : /#([a-f0-9]{6}|[a-f0-9]{3})\b/gi
}
