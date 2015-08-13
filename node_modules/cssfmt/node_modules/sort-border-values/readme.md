# sort-border-values [![Build Status](https://travis-ci.org/morishitter/sort-border-values.svg)](https://travis-ci.org/morishitter/sort-border-values)

Sort values of CSS border propety

## Installation

```shell
$ npm install sort-border-values
```

## Example

```js
var sort = require('sort-border-value')

sort('#ddd solid 1px') // '1px solid #ddd'
sort('#ddd solid 1px', 'swc') // 'solid 1px #ddd'
```

## Usage

### `sort(values, format)`

`values`: values of CSS border property.

`format`: format of sort.

- `'s'`: style
- `'w'`: width
- `'c'`: color

Default is `'wsc'`.


## License

The MIT License (MIT)

Copyright (c) 2015 Masaaki Morishita
