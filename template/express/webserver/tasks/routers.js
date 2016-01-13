/**
 * 路由
 * @author ydr.me
 * @create 2015-04-29 14:32
 */


'use strict';

var configs = require('../../configs.js');


module.exports = function (next, app) {
    // 前置
    require('../controllers/pre.js')(app);

    // home
    require('../controllers/home.js')(app);

    // 程序路由优先，最后静态路由
    require('../controllers/static.js')(app);

    // 后置
    require('../controllers/post.js')(app);

    // 启动 http
    app.listen(configs.port, function (err) {
        next(err, app);
    }).on('error', next);
};



