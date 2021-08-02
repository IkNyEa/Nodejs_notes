import { createReadStream } from "fs";
var data = createReadStream("hello.txt");
data.once("open", () => {
    console.log("file has been opend!");
})
data.once("data", (chunk) => {
    console.log("文件内容:\n" + chunk);
})
data.once("close", () => {
    console.log("file has been closed!");
})