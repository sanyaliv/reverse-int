module.exports = function reverse (n) {
    let num = n < 0 ? n * -1 : n;
    let arr = num.toString().split("");
    let res = arr.reverse();
    return res.join("")
}
