/***
 * @creater:ACBash
 * @create_time:22-11-2 22:6:33
 * @last_modify:ACBash
 * @modify_time:22-11-4 21:31:33
 * @line_count:13
 **/

const express = require('express');
const router = express.Router();

//用户登录
router.post("/login", (req, res) => {
    const body = req.body;
    res.send({
        "code": 0,
        "data": body
    });
});

module.exports = router;