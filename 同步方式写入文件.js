//同步方式的文件读写
var fs = require("fs");
//打开文件
var fd = fs.openSync("hello.txt", "w");
//写入
fs.writeSync(fd, "nodejs fs文件写入")

//关闭文件

fs.closeSync(fd)