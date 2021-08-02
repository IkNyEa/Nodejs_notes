var md = require("./module1");

console.log(md.a);
var calc = md.calc();

console.log(calc.doSum(1, 2), calc.doRide(2, 2))

//console.log(require("fs"))
console.log(arguments.callee + "");