//简单、同步、异步的方式都是一次性写入文件，写入较大的文件害得流式
var fs = require("fs");
//创建流
var ws = fs.createWriteStream("hello3.txt");
//监听流
ws.once("open", () => {
    console.log("流开始了")
});
ws.once("close", () => {
    console.log("流关闭了");
})
ws.write("aaaaaaaa");
ws.write("bbbbbbbb");
ws.write("cccccccc");
ws.write("dddddddd");
ws.end();