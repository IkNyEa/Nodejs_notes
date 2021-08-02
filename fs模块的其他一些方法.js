/*stat方法,查找文件状态
import { stat } from 'fs'; //模块导入的另外一种方法
const trail = ["./dir", "hello.txt"];
for (let i = 0; i < trail.length; i++) {
    stat(trail[i], (err, stat) => {
        if (!err) {
            console.log(stat.isDirectory());
            console.log(stat);
        }
    })
}
*/
/*
//输出文件方法
import { unlink, unlinkSync } from "fs";
unlink("UsersAdministratorDesktop流程.txt", (err) => {
    if (err)
        throw err;
    else
        console.log("文件已被删除");
})
*/
/*
//读取目录结构方法
import { readdir } from "fs";
readdir(".", (err, files) => {
    console.log(files);
})
*/

//监听文件状态
import { watchFile } from "fs";
watchFile("hello.txt", { interval: 1000 }, (curr, prev) => {
    console.log("文件发生改变");
    console.log("当前文件大小" + curr.size);
    console.log("以前文件大小" + prev.size);
})