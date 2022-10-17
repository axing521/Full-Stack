/***
 * @creater:ACBash
 * @create_time:22-10-17 15:45:39
 * @last_modify:ACBash
 * @modify_time:22-10-17 15:45:39
 * @line_count:42
 **/

/* const fs = require("fs");

fs.readFile("./test.txt", "utf8", (err, data) => {
    // 如果读取成功，err的值为nul，失败时，err的值为错误对象
    if (err) {
        console.error(err)
        return
    }
    console.log(data);
})

const content = "so fantastic node!"

fs.writeFile("./test.txt", content, err => {
    if(err){
        console.log(err);
        return;
    }
    console.log("文件写入成功");
})

const add = "\nACBash yyds!";

fs.appendFile("./test.txt", add, err => {
    if(err){
        console.log(err);
        return;
    }
    console.log("文件追加成功");
}) */

const fs = require("fs");

fs.readFile("./test.txt", "utf8", (err, data) => {
    if(err){
        console.log(err);
        return;
    }

    const newContent = data.split("\n").map(val => val.replace(":", "-")).join("\n");

    fs.writeFile("./test.txt", newContent, err => {
        if(err){
            console.log(err);
            return;
        }

        console.log("内容改写成功");
    })
})