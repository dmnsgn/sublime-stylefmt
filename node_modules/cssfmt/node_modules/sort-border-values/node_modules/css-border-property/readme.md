# css-border-property [![Build Status](https://travis-ci.org/morishitter/css-border-property.svg)](https://travis-ci.org/morishitter/css-border-property)

Parser and Stringifier of `border` property

## Install

```shell
$ npm install css-border-property
```

## Usage

```js
var border = require('css-border-property')

border.parse('1px solid #eee')
/*
[
  { property: 'border-width', value: '1px' },
  { property: 'border-style', value: 'solid' },
  { property: 'border-color', value: '#eee' }
]
*/

border.stringify([
  { property: 'border-width', value: '1px' },
  { property: 'border-style', value: 'solid' },
  { property: 'border-color', value: '#eee' }
])
/* '1px solid #fff' */
```

## License

The MIT License (MIT)

Copyright (c) 2015 Masaaki Morishita
