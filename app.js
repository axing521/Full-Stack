/***
 * @creater:ACBash
 * @create_time:22-11-4 21:1:42
 * @last_modify:ACBash
 * @modify_time:22-11-4 21:31:30
 * @line_count:19
 **/

const express = require("express");
const app = express();

//解析json格式的数据
app.use(express.json());
//解析urlencoded格式的数据
app.use(express.urlencoded({extended: false}));

const userRouter = require("./router/user");
const courseRouter = require("./router/course");

//用户相关的接口
app.use("/api/v1/user", userRouter);
//课程相关的接口
app.use("/api/v1/course", courseRouter);

app.listen(3000, () => {
    console.log("server run on http://127.0.0.1:3000");
});