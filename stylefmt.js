'use strict';

var postcss = require('postcss');
var scss = require('postcss-scss');
var stylefmt = require('stylefmt');

var data = '';

// Get options if needed
if (process.argv.length > 2) {
  var opts = JSON.parse(process.argv[2]);
  process.chdir(opts.file_path);
}

process.stdin.on('data', function(css) {
  data += css;
});

process.stdin.on('end', function() {
  postcss([ stylefmt ]).process(data, { syntax: scss }).then(function(result) {
    try {
      process.stdout.write(result.css);
    } catch (err) {
      throw err;
    }
  });
});
