/***
 * @creater:ACBash
 * @create_time:22-11-2 22:8:30
 * @last_modify:ACBash
 * @modify_time:22-11-2 22:27:35
 * @line_count:8
 **/

const express = require("express");
const app = express();
const router = require('./router/user');
//使用中间件注册路由模块
app.use(router);
app.listen(3000, () => {
    console.log("server run on http://127.0.0.1:3000");
});