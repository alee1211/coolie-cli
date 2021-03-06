/**
 * replace amd require
 * @author ydr.me
 * @create 2015-10-24 13:08
 */


'use strict';

var string = require('ydr-utils').string;
var dato = require('ydr-utils').dato;
var debug = require('ydr-utils').debug;
var path = require('ydr-utils').path;

var pathURI = require('../utils/path-uri.js');
var parseDefineRequireVarible = require('../parse/define-require-varible.js');

var REG_SEG = /["']\s*?,\s*?["']/;


/**
 * 替换 require
 * @param file {String} 文件路径
 * @param options {Object} 配置
 * @param options.code {String} 代码，压缩后的代码
 * @param options.name2IdMap {Object} 依赖对应表 {name: id}
 * @param options.async {Boolean} 是否异步模块
 */
module.exports = function (file, options) {
    var code = options.code;
    var name2IdMap = options.name2IdMap;
    var depLength = Object.keys(name2IdMap).length;
    var requireVar = parseDefineRequireVarible(file, {
        code: code
    });

    if (!requireVar && depLength) {
        debug.error('replace require', path.toSystem(file));
        debug.error('replace require', 'can not found `require` variable, but used');
        debug.error('replace require', 'code must be compressed, before replace amd define');
        return process.exit(1);
    }

    dato.each(name2IdMap, function (depName, depId) {
        var reg = _buildReg(requireVar, depName, options.async);

        code = options.async ?
            code.replace(reg, requireVar + '.async("' + depId + '"') :
            code.replace(reg, requireVar + '("' + depId + '")');
    });

    return code;
};


/**
 * 生成正则
 * @param requireVar
 * @param dep
 * @param async
 * @returns {RegExp}
 * @private
 */
function _buildReg(requireVar, dep, async) {
    dep = string.escapeRegExp(dep);
    dep = dep.replace(REG_SEG, '["\']\\s*?,\\s*?["\']');
    requireVar = string.escapeRegExp(requireVar);

    if (async) {
        // require.async("..."
        return new RegExp('\\b' + requireVar + '\\.async\\(([\'"])' + dep + '\\1', 'g');
    }

    // require("...");
    // require("...", "...");
    return new RegExp(requireVar + '\\(([\'"])' + dep + '\\1\\)', 'g');
}



