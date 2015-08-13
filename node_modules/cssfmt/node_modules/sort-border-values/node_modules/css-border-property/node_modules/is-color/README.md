# is-color [![Build Status](https://travis-ci.org/morishitter/is-color.svg)](https://travis-ci.org/morishitter/is-color)

Check if a string is CSS color value

## Install

```shell
$ npm install is-color
```

## Usage

```js
var isColor = require('is-color')

isColor('rgb(255, 0, 0)') // true
isColor('rgb(255)') // false

isColor('rgba(255, 0, 0, .8)') // true
isColor('rgba(255, 0, 0)') // false

isColor('hsl(123, 45%, 67%)') // true
isColor('hsl(123, 45%)') // false

isColor('hsla(123, 45%, 67%, 0.4)') // true
isColor('hsla(123, 45%, 67%)') // false

isColor('#fff') // true
isColor('#ff') // false

isColor('tomato') // true
isColor('hoge') // false

isColor('currentColor') // true
isColor('inherit') // true
isColor('transparent') // true
```

## License

The MIT License (MIT)

Copyright (c) 2015 Masaaki Morishita
