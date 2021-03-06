/*!
 * cmd book
 * @author ydr.me
 * @create 2015-08-12 09:18
 */


'use strict';

var openHelper = require('open');
var debug = require('ydr-utils').debug;

var pkg = require('../package.json');
var banner = require('./banner.js');

module.exports = function () {
    banner();
    openHelper(pkg.coolie.book + '?from=coolie-cli@' + pkg.version, function (err) {
        if (err) {
            debug.error('coolie book', pkg.coolie.book);
            debug.error('coolie book', err.message);
            return process.exit(1);
        }

        debug.success('coolie book', pkg.coolie.book);
    });
};


