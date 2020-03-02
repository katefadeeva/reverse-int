module.exports = function reverse (n) {
    let arr = String(n).split('').reverse().join('');
    return Number.parseInt(arr);
}
