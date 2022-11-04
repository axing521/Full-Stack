/***
 * @creater:ACBash
 * @create_time:22-11-3 17:22:48
 * @last_modify:ACBash
 * @modify_time:22-11-3 17:26:48
 * @line_count:16
 **/

// middleware.js   使用第三方querystringify    'a=1&b=2'   =>    {a:1,b:2}
const qs = require('querystringify');
const middleware = (req, res, next) => {
    let mess = '';
    req.on('data', (val) => {
        mess += val;
    });
    req.on('end', () => {
        req.body = qs.parse(mess);
        next();
    });
    console.log(req.body);
    res.end("使用了中间件")
};

module.exports = middleware;