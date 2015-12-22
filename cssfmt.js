'use strict';

var cssfmt = require('cssfmt');
var data = '';

/**
 * If sublime is editting on a newly created file and without a file name,
 * 'file_path' will not be passed as command line argument
 */
if (process.argv.length > 2) {
    var opts = JSON.parse(process.argv[2]);
    process.chdir(opts.file_path);
}

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
