/**
 * 文件描述
 * @author ydr.me
 * @create 2015-10-22 18:56
 */


'use strict';

var path = require('ydr-utils').path;
var fs = require('fs');
var assert = require('assert');

var replaceHTMLTagScriptCoolie = require('../../replace/html-tag-script-coolie.js');
var file = path.join(__dirname, '../../example/src/html/user/index.html');

var code = fs.readFileSync(file, 'utf8');
var srcDirname = path.join(__dirname, '../../example/src/');
var destDirname = path.join(__dirname, '../../example/dest/');
var destCoolieConfigJSURI = 'static/js/eb21eac7c7c8278c7bf0c208efbfd663.js';
var destCoolieConfigJSPath = path.join(destDirname, destCoolieConfigJSURI);
var destJSDirname = path.join(destDirname, 'static/js/');
var srcCoolieConfigBaseDirname = path.join(srcDirname, 'static/js/app/');
var srcMainPath = path.join(srcDirname, 'static/js/app/user/index.js');
var mainVersionMap = {};

mainVersionMap[srcMainPath] = '00023123123123123312312';

describe('replace/html-tag-script-coolie.js', function () {
    it('e', function () {
        var ret = replaceHTMLTagScriptCoolie(file, {
            code: code,
            srcDirname: srcDirname,
            srcCoolieConfigBaseDirname: srcCoolieConfigBaseDirname,
            destDirname: destDirname,
            destJSDirname: destJSDirname,
            mainVersionMap: mainVersionMap,
            destHost: 'http://abc.com/',
            destCoolieConfigJSPath: destCoolieConfigJSPath
        }).code;

        console.log('\n\n-------------------------------------------');
        console.log(ret);
        assert.equal(ret.indexOf('http://abc.com/' + destCoolieConfigJSURI) > -1, true);
        assert.equal(ret.indexOf(mainVersionMap[srcMainPath]) > -1, true);
    });
});



