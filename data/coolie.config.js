"use strict";

var fs = require('fs');

module.exports = function (coolie) {
    coolie.config({
        clean: true,
        js: {
            main: [
                './static/js/app/**'
            ],
            'coolie-config.js': './static/js/coolie-config.js',
            dest: './static/js/',
            chunk: [
                [
                    './static/js/libs1/**'
                ],
                './static/js/libs2/**'
            ]
        },
        html: {
            src: [
                './html/**'
            ],
            minify: true
        },
        css: {
            dest: './static/css/',
            minify: {
                compatibility: 'ie7'
            }
        },
        resource: {
            dest: './static/res/',
            minify: true
        },
        copy: [],
        dest: {
            dirname: '../dest/',
            host: '',
            versionLength: 32
        }
    });

    // use coolie middleware
    // coolie.use(require('coolie-*'));

    // custom middleware

};