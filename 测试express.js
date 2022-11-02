/***
 * @creater:ACBash
 * @create_time:22-11-1 17:29:55
 * @last_modify:ACBash
 * @modify_time:22-11-1 17:35:27
 * @line_count:7
 **/

const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('service run in http://127.0.0.1:3000');
});