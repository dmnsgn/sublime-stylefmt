'use strict';

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
  try {
    process.stdout.write(stylefmt.process(data));
  } catch (err) {
    throw err;
  }
});
