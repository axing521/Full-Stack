/***
 * @creater:ACBash
 * @create_time:22-11-1 14:37:0
 * @last_modify:ACBash
 * @modify_time:22-11-1 14:40:59
 * @line_count:14
 **/

const fs = require('fs');
const path = require('path');

//创建可读流
const flowa = fs.createReadStream("./a.txt");
//创建可写流
const flowb = fs.createWriteStream("./b.txt");
//通过pipe建立管道流
flowa.pipe(flowb);

//监听数据完成流向
flowa.on('end', () => {
    console.log('数据流向成功');
});