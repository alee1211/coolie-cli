define(function (require, exports, module) {
    'use strict';



    //require('../libs1/vue.min.js');
    //require('../libs1/jquery.js');
    //require('../libs1/path1/path2/');

    // image
    //require('../../img/loading.gif', 'image|base64');
    //require('../../img/100x100.png', 'image|url');
    //require('../../img/100x100.png', 'image|text');
    //require('../../img/100x100.png', 'image|base64');
    require('../../img/100x100.png', 'file');


    // text
    //require('../libs2/some.txt', 'text|base64');
    //require('../libs2/some.txt', 'text|url');
    //require('../libs2/some.txt', 'text|text');
    //require('../libs2/some.txt', 'text|base64');


    // json
    //require('../libs2/some.html', 'html');
    //require('../libs2/some.json', 'json');
    //require('../libs2/some.json', 'json');
    //require('../libs2/some.json', 'json|url');
    //require('../libs2/some.json', 'json|text');
    //require('../libs2/some.json', 'json|base64');
    //var s = "require('../libs2/some.json', 'json|base64')";


    // css
    //require('../libs2/some.css', 'css');
    //require('../libs2/some.css', 'css|url');
    //require('../libs2/some.css', 'css|text');
    //require('../libs2/some.css', 'css|base64');
    require('../libs2/some.css', 'css|style');


    // html
    //require('../libs2/some.html', 'html');
    //require('../libs2/some.html', 'html|url');
    //require('../libs2/some.html', 'html|text');
    //require('../libs2/some.html', 'html|base64');



    if(DEBUG){
        alert(123);
    }
});