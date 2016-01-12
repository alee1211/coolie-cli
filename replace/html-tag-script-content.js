/**
 * html <script> replace
 * @author ydr.me
 * @create 2015-10-22 18:41
 */


'use strict';

var fse = require('fs-extra');
var dato = require('ydr-utils').dato;
var path = require('ydr-utils').path;
var debug = require('ydr-utils').debug;
var typeis = require('ydr-utils').typeis;
var encryption = require('ydr-utils').encryption;

var htmlAttr = require('../utils/html-attr.js');
var pathURI = require('../utils/path-uri.js');
var copy = require('../utils/copy.js');
var sign = require('../utils/sign.js');
var reader = require('../utils/reader.js');
var minifyJS = require('../minify/js.js');
var parseHTML = require('../parse/html.js');
var buildJSPath = require('../build/js-path.js');

var JS_TYPES = {
    'javascript': true,
    'text/javascript': true,
    'text/ecmascript': true,
    'text/ecmascript-6': true,
    'text/jsx': true,
    'application/javascript': true,
    'application/ecmascript': true
};
var DEFAULT_JS_TYPE = 'text/javascript';
var COOLIE_IGNORE = 'coolieignore';
var COOLIE = 'coolie';
var DATA_MAIN = 'data-main';
var DATA_CONFIG = 'data-config';
var REG_SCRIPT = /(<script\b[\s\S]*?>)([\s\S]*?)<\/script>/ig;
// 有歧义的代码片段
var REG_AMBIGUITY_SLICE = /}};?<\/script>$/;
var REG_LINE = /[\n\r]/g;
var REG_SPACE = /\s+/g;
var defaults = {
    code: '',
    srcDirname: null,
    srcCoolieConfigBaseDirname: null,
    destJSDirname: null,
    destDirname: null,
    destHost: '/',
    destCoolieConfigJSPath: null,
    mainVersionMap: {},
    versionLength: 32,
    minifyJS: true,
    uglifyJSOptions: null,
    signJS: false
};
var minifyPathMap = {};
var minifyJSMap = {};


/**
 * 替换 html script
 * @param file {String} 文件
 * @param options {Object} 配置
 * @param options.code {String} 代码
 * @param options.srcDirname {String} 构建根目录
 * @param options.srcCoolieConfigBaseDirname {String} coolie-config:base 目录
 * @param options.destDirname {String} 目标根目录
 * @param options.destHost {String} 目标根域
 * @param options.destJSDirname {String} 目标 JS 目录
 * @param options.destCoolieConfigJSPath {String} 目标 coolie-config.js 路径
 * @param options.mainVersionMap {Object} 入口文件版本 map，{file: version}
 * @param options.versionLength {Number} 版本号长度
 * @param [options.minifyJS] {Boolean} 是否压缩 JS
 * @param [options.uglifyJSOptions] {Object} uglify-js 配置
 * @param [options.signJS] {Boolean} 是否签名 JS 文件
 * @returns {Object}
 */
module.exports = function (file, options) {
    options = dato.extend(true, {}, defaults, options);
    var code = options.code;
    var mainList = [];
    var jsList = [];


    code = parseHTML(code).match({
        tag: 'script'
    }, function (node) {
        if (!node.attrs) {
            return node;
        }

        if (node.attrs.hasOwnProperty(COOLIE_IGNORE)) {
            node.attrs[COOLIE_IGNORE] = null;
            return node;
        }

        if (node.attrs.hasOwnProperty('src')) {
            return node;
        }

        var type = node.attrs.type || DEFAULT_JS_TYPE;
        var isJS = JS_TYPES[type];

        if (!isJS) {
            return node;
        }

        console.log(node);


        return node;
    }).exec();

    return {
        code: code,
        mainList: mainList,
        jsList: jsList
    };
};