/**
 * 文件描述
 * @author ydr.me
 * @create 2016-01-12 19:34
 */


'use strict';

var path = require('ydr-utils').path;
var assert = require('assert');

var buildResPath = require('../../build/res-path.js');
var exampleDirname = path.join(__dirname, '../../example/');
var srcDirname = path.join(exampleDirname, 'src');
var destDirname = path.join(exampleDirname, 'dest');
var destResourceDirname = path.join(destDirname, 'static/res');

describe('build/res-path.js', function () {
    it('e', function () {
        var url = '/static/img/loading.gif';
        var ret = buildResPath(url, {
            file: path.join(exampleDirname, 'html/index.html'),
            srcDirname: srcDirname,
            destDirname: destDirname,
            destHost: '/',
            destResourceDirname: destResourceDirname,
            minifyCSS: true,
            minifyResource: true,
            versionLength: 32,
            signCSS: true,
            cleanCSSOptions: null
        });

        console.log('\n\n-----------------------------------------------');
        console.log(ret);
        assert.equal(url !== ret.url, true);
    });
});

