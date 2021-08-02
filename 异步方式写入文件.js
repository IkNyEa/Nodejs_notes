//异步方式写入文件
var fs = require("fs");
//open file 
fs.open("hello.txt", "a", function(err, fd) { //flag（打开文件方式） 为 w 则截断文件，覆盖文件从头开始写，打开方式为a则从文件尾巴开始追加
    if (!err) {
        fs.write(fd, "异步方式写入文件", function(err) {
            if (!err) {
                console.log("文件写入成功");
                fs.close(fd, function(err) {
                    if (!err) {
                        console.log("文件已关闭");
                    }
                })
            }
        })
    } else {
        console.log(err);
    }
})