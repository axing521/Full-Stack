/***
 * @creater:ACBash
 * @create_time:22-11-1 17:29:55
 * @last_modify:ACBash
 * @modify_time:22-11-2 22:5:38
 * @line_count:25
 **/

/* const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('service run in http://127.0.0.1:3000');
}); */

const express = require('express')
const app = express()
app.get('/userInfo', (req, res) => {
    // 响应数据处理
    console.log(req.query)
    //向客户端响应数据
    res.send('请求成功')
});
app.post('/login', (req, res) => {
    // 响应数据处理
    console.log(req.body)
    //向客户端响应数据
    res.send('请求成功')
});
app.listen(3000, () => {
    console.log('service run in http://127.0.0.1:3000');
});