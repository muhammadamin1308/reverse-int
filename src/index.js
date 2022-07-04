module.exports = function reverse(num) {
    let toStr = '' + num
    let sht = toStr.split("").reverse().join("");
    return Number(sht)
}
