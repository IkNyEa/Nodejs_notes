var fs = require("fs");
fs.writeFile("hello2.txt", "通过writeFile写入的内容(不覆盖的方式)/", { flag: "a" }, (err) => {
    //也可以写入绝对路径的文件，但是/号必须转义
    //如C:\\Users\\Administrator\\Desktop\\流程.txt
    if (!err) {
        console.log("文件写入成功");
    } else {
        console.log(err);
    }
})