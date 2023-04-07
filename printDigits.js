function printDigits(num) {
    let digit, result = 0;
    while ( num ) {
        digit = num % 10;
        result = (result * 10) + digit;
        num = num/10|0;
    }
    return result;
}

console.log(printDigits(763));