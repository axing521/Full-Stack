/***
 * @creater:ACBash
 * @create_time:22-11-3 0:6:35
 * @last_modify:ACBash
 * @modify_time:22-11-3 0:6:39
 * @line_count:25
 **/

const express = require('express');
const app = express();
const middle = (req, res, next) => {
    console.log('一个中间件');
    /**
     * 逻辑处理
     */
    //逻辑处理完成后，必须调用next()将程序交给下个中间件或者路由，否则程序停止
    next();
};

//登录接口
//middle中间件只会生效于当前的登录路由，不会影响下面的查询路由
app.post('/user/login', middle, (req, res) => {
    res.send('登录请求');
});

//用户数据查询接口
app.get('/user/userInfo', (req, res) => {
    res.send('用户的数据');
});

app.listen(3000, () => {
    console.log(111);
});