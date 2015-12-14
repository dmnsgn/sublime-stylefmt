'use strict';

var cssfmt = require('cssfmt');
var data = '';

var opts = JSON.parse(process.argv[2]);
process.chdir(opts.file_path);

process.stdin.on('data', function(css) {
  data += css;
});

process.stdin.on('end', function() {
  try {
    process.stdout.write(cssfmt.process(data));
  } catch (err) {
    throw err;
  }
});
