/**
 * 文件描述
 * @author ydr.me
 * @create 2015-10-23 15:24
 */


'use strict';

var path = require('ydr-utils').path;
var assert = require('assert');

var replaceAMDRequire = require('../../replace/amd-require.js');

var file = __filename;

describe('replace/amd-require.js', function () {
    it('async:false', function () {
        var code = 'define(function(require){require("../libs/x.js");require.async("../libs/x.js");require(\'../libs/all.js\', \'js|js\');console.log("app/index.js")});';
        var ret = replaceAMDRequire(file, {
            code: code,
            async: false,
            name2IdMap: {
                '../libs/x.js': 'm',
                '../libs/all.js", "js|js': 'n'
            }
        });
        var expect = 'define(function(require){require("m");require.async("../libs/x.js");require("n");console.log("app/index.js")});';

        //console.log(ret);
        assert.equal(ret, expect);
    });

    it('async:true', function () {
        var code = 'define(function(require){require("../libs/x.js");require.async("../libs/all.js");console.log("app/index.js")});';
        var ret =  replaceAMDRequire(file, {
            code: code,
            async: true,
            name2IdMap: {
                '../libs/all.js': 'n'
            }
        });
        var expect = 'define(function(require){require("../libs/x.js");require.async("n");console.log("app/index.js")});';

        //console.log(ret);
        assert.equal(ret, expect);
    });
});

