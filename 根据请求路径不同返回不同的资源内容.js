/***
 * @creater:ACBash
 * @create_time:22-11-1 12:51:52
 * @last_modify:ACBash
 * @modify_time:22-11-1 14:6:58
 * @line_count:24
 **/

//引入http模块
const http = require('http');

//创建服务器
const server = http.createServer();

//监听客户端的请求
server.on('request', (req, res) => {
  //设置默认的返回内容
  let mess = '404 页面请求失败';
  //判断请求的地址
  if (req.url === '/' || req.url === '/home') {
    mess = '<h1>首页</h1>';
  } else if (req.url === '/about') {
    mess = '<h1>关于</h1>';
  }
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  res.end(mess);
});

//启动服务器
server.listen(3000, () => {
  console.log('服务运行在: http://127.0.0.1:3000');
});