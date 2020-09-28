module.exports = function reverse (n) {
    n < 0 ? n *= -1 : n;
    let reverseInt = String(n).split('').reverse().join('');
    return +reverseInt;
}