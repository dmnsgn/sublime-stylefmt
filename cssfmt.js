'use strict';

var fs = require('fs');

var stdin = require('get-stdin');
var postcss = require('postcss');
var cssfmt = require('cssfmt');

stdin(function(data) {
  var opts = JSON.parse(process.argv[2]);
  var file = fs.readFileSync(opts.filepath, 'utf-8');

  try {
    var output = postcss()
      .use(cssfmt())
      .process(file)
      .css;
    process.stdout.write(output);
  } catch (err) {
    throw err;
  }
});
