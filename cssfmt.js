'use strict';

var fs = require('fs');
var cssfmt = require('cssfmt');

var file = fs.readFileSync(JSON.parse(process.argv[2]).filepath, 'utf-8');

try {
  process.stdout.write(cssfmt.process(file));
} catch (err) {
  throw err;
}
