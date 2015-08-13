# is-border-style [![Build Status](https://travis-ci.org/morishitter/is-border-style.svg)](https://travis-ci.org/morishitter/is-border-style)

Check if a string is the value of `border-style` property

## Install

```shell
$ npm install is-border-style
```

## Usage

```js
var isBorderStyle = require('is-border-style')

isBorderStyle('solid') // true
isBorderStyle('dotted') // true
isBorderStyle('none') // true
isBorderStyle('foo') // false
```


## License

The MIT License (MIT)

Copyright (c) 2015 Masaaki Morishita
