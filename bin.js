#!/usr/bin/env node
// mostly taken from rimraf http://npmjs.org/package/rimraf

var ls = require('./');

var help = false;
var dashdash = false;
var args = process.argv.slice(2).filter(function(arg) {
  if (dashdash) {
    return !!arg;
  } else if (arg === "--") {
    dashdash = true;
  } else if (arg.match(/^(-+|\/)(h(elp)?|\?)$/)) {
    help = true;
  } else {
    return !!arg;
  }
});

if (help || args.length === 0) {
  var log = help ? console.log : console.error;
  log("Usage: simple-ls <path> [options]");
  log("");
  log("  Lists all files and folders at <path>.");
  log("");
  log("Options:");
  log("");
  log("  -h, --help ......... display this information.");
  log("  -r, --recursive .... recursively list all files and folders.");
  process.exit(help ? 0 : 1);
} else {
  ls(args[0], args[1]);
}
