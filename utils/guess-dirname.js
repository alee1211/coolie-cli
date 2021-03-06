/**
 * 递增猜目录
 * @author ydr.me
 * @create 2015-10-26 14:23
 */


'use strict';


var typeis = require('ydr-utils').typeis;
var path = require('ydr-utils').path;


/**
 * 递增猜目录
 * @param beginDirname {String} 起始目录
 * @param dirname {String} 目录名称
 * @returns {string}
 */
module.exports = function (beginDirname, dirname) {
    var guessDirname = path.join(beginDirname, dirname + '/');

    if (!typeis.directory(guessDirname)) {
        return guessDirname;
    }

    var index = 0;

    guessDirname = path.join(beginDirname, dirname + index+ '/');

    while (typeis.directory(guessDirname)) {
        index++;
        guessDirname = path.join(beginDirname, dirname + index+ '/');
    }

    return guessDirname;
};



