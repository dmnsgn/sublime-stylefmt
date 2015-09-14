# editorconfig-indent [![Build Status](https://travis-ci.org/morishitter/editorconfig-indent.svg)](https://travis-ci.org/morishitter/editorconfig-indent)

get `indent_size` and `indent_style` from `.editorconfig` file

## Installation

```shell
$ npm install editorconfig-indent
```

## Usage

```js
var fs = require('fs')
var getIndent = require('editorconfig-indent')
var editorconfig = fs.readFileSync('.editorconfig', 'utf-8')

getIndent(editorconfig)

/* { indentSize: 4, indentStyle: 'space' } */

```

## License

The MIT License (MIT)

Copyright (c) 2015 Masaaki Morishita
