# is-css-length [![Build Status](https://travis-ci.org/morishitter/is-css-length.svg)](https://travis-ci.org/morishitter/is-css-length)

Check if a string is CSS value of the length

## Install

```shell
$ npm install is-css-length
```

## Usage

```js
var isLength = require('is-css-length')

isLength(10px) // true
isLength(10)   // false
isLength(0em)  // true
isLength(0)    // true
```

## License

The MIT License (MIT)

Copyright (c) 2015 Masaaki Morishita
