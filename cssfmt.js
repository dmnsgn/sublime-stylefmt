'use strict';

var fs = require('fs');

var stdin = require('get-stdin');
var cssfmt = require('cssfmt');

stdin(function(data) {
  var opts = JSON.parse(process.argv[2]);
  var file = fs.readFileSync(opts.filepath, 'utf-8');

  try {
    process.stdout.write(cssfmt.process(file));
  } catch (err) {
    throw err;
  }
});
