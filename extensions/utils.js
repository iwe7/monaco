"use strict";
var fse = require('fs-extra');
var fs = require('fs');
var path = require('path');
var EOL = require('os').EOL;
var glob = require('glob');
function copy(src, dest) {
    return fse.copy(src, dest);
}
exports.copy = copy;
function dir(filePath) {
    return path.dirname(filePath);
}
exports.dir = dir;
function readFile(filePath) {
    return fs.readFileSync(__dirname + '/../' + filePath, 'utf8');
}
exports.readFile = readFile;
function writeFile(filePath, content) {
    fs.writeFileSync(__dirname + '/../' + filePath, content);
}
exports.writeFile = writeFile;
function stringify(object, eol) {
    if (eol === void 0) { eol = '\n'; }
    var cache = [];
    var value = JSON.stringify(object, function (key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
                return;
            }
            cache.push(value);
        }
        return value;
    }, 2);
    value = value.split('\n').join(eol) + eol;
    cache = null;
    return value;
}
exports.stringify = stringify;
function getAllFilesInFolder(fullSrcDir) {
    return glob.sync('./**/*', { cwd: fullSrcDir }).map(function (p) { return path.resolve(fullSrcDir, p); });
}
exports.getAllFilesInFolder = getAllFilesInFolder;
function isDir(filePath) {
    return fs.lstatSync(filePath).isDirectory();
}
exports.isDir = isDir;
function remove(filePath) {
    return fse.removeSync(filePath);
}
exports.remove = remove;
