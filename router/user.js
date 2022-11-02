/***
 * @creater:ACBash
 * @create_time:22-11-2 22:6:33
 * @last_modify:ACBash
 * @modify_time:22-11-2 22:35:3
 * @line_count:15
 **/

const express = require('express');
const router = express.Router();
// 登录
router.post('/user/login', (req, res) => {
    console.log(req.body);
    res.send('登录');
});

// 获取用户数据
router.get('/user/userInfo', (req, res) => {
    console.log(req.query);
    res.send('获取用户数据');
});

module.exports = router;