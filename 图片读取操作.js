var fs = require("fs")
fs.readFile('C:\\Users\\Administrator\\Desktop\\1.jpg', (err, data) => {
    if (err)
        throw err;
    else {
        fs.writeFile('C:\\Users\\Administrator\\Desktop\\2.jpg', data, (err) => {
            if (!err)
                console.log("图片读取成功");
            else {
                console.log("读取失败");
            }
        })
    }
})