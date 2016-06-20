var fs = require("fs");
var recursiveReaddir = require("recursive-readdir");

function logFiles(files) {
  for (var i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
}

function ls(path, options) {
  if (!options) {
    standard(path);
  } else if (validOptions(options)) {
    if (options === "-h" || options === "--help") {
      help();
    } else if (options === "-r" || options === "--recursive") {
      recursive(path);
    }
  } else {
    console.error("Invalid usage. See below.");
    console.error("");
    help();
    process.exit(1);
  }
}

function standard(path) {
  fs.readdir(path, function(err, files) {
    if (err) {
      console.error(err);
      process.exit(0);
    } else {
      logFiles(files);
    }
  });
}

function recursive(path) {
  recursiveReaddir(path, function(err, files) {
    if (err) {
      console.error(err);
      process.exit(0);
    } else {
      logFiles(files);
    }
  });
}

function validOptions(options) {
  // @TODO: Check all options
  return (
    options === "-r" ||
    options === "--recursive" ||
    options === "-h" ||
    options === "--help"
  );
}

function help() {
  console.log("Usage: simple-ls <path> [options]");
  console.log("");
  console.log("  Lists all files and folders at <path>.");
  console.log("");
  console.log("Options:");
  console.log("");
  console.log("  -h, --help ......... display this information.");
  console.log("  -r, --recursive .... recursively list all files and folders.");
}

module.exports = ls;
