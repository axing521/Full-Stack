/***
 * @creater:ACBash
 * @create_time:22-10-17 14:19:58
 * @last_modify:ACBash
 * @modify_time:22-10-17 16:5:57
 * @line_count:14
 **/

const path = require("path");
const newpath = path.join('a', 'b', 'c')
console.log(newpath) // a/b/c

const fs = require("fs");

fs.readFile(path.join(__dirname, '/test.txt'), 'utf8', (err, data) => {
    // 如果读取成功，err的值为nul，失败时，err的值为错误对象
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})