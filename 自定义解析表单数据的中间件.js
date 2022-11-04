/***
 * @creater:ACBash
 * @create_time:22-11-3 17:21:3
 * @last_modify:ACBash
 * @modify_time:22-11-3 17:29:49
 * @line_count:8
 **/

// index.js
const express = require("express");
const app = express();
const middleware = require('./middleware.js');
app.use(middleware);
app.listen(3000, () => {
    console.log("server run on http://127.0.0.1:3000")
});