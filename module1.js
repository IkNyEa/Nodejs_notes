console.log('我是模块1');
exports.a = 100;
exports.calc = function() {
    function sum(a, b) {
        return a + b;

    }

    function ride(a, b) {
        return a * b;

    }
    return {
        doSum: sum,
        doRide: ride
    }
}