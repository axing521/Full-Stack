/***
 * @creater:ACBash
 * @create_time:22-11-4 21:10:27
 * @last_modify:ACBash
 * @modify_time:22-11-4 21:18:52
 * @line_count:13
 **/

const express = require('express');
const router = express.Router();

//课程查询
router.get("/find", (req, res) => {
    const query = req.query;
    res.send({
        "code": 0,
        "data": query
    });
});

module.exports = router;