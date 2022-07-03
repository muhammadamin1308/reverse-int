module.exports = function reverse(num) {

    let rev = 0;
    let number1 = num;
    let lastDigit;

    while (number1 != 0) {
        lastDigit = number1 % 10;
        rev = rev * 10 + lastDigit;
        number1 = Math.floor(number1 / 10);
    }
    return +rev
}
