/**
 * 文件描述
 * @author ydr.me
 * @create 2015-10-31 20:35
 */



'use strict';

var path = require('path');
var fs = require('fs');
var string = require('ydr-utils').string;

var pkg = require('../package.json');

var bannerPath = path.join(__dirname, '../data/banner.txt');
var bannerText = fs.readFileSync(bannerPath, 'utf8');

module.exports = function () {
    console.log(bannerText);
    console.log('╔═══════════════════════════════════════════════════╗');
    console.log('║  ', 'coolie@' + string.padRight(pkg.version, 8, ' '), '                                ║');
    console.log('║  ', pkg.description, '             ║');
    console.log('╚═══════════════════════════════════════════════════╝');
    console.log('');
};