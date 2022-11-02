/***
 * @creater:ACBash
 * @create_time:22-11-2 22:58:29
 * @last_modify:ACBash
 * @modify_time:22-11-3 0:6:21
 * @line_count:27
 **/

const express = require('express');
const app = express();

//全局生效的中间件
app.use((req, res, next) => {
    console.log('一个中间件');
    /**
     * 逻辑处理
     */
    //逻辑处理完成后，必须调用next()将程序交给下个中间件或者路由，否则程序停止
    next();
});

//登录接口
app.post('/user/login', (req, res) => {
    res.send('登录请求');
});

//用户数据查询接口
app.get('/user/userInfo', (req, res) => {
    console.log(req.query);
    res.send('用户的数据');
});

app.listen(3000, () => {
    console.log('server run in http://127.0.0.1:3000');
});