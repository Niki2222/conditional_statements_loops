function larger(number1, number2) {
    let large = number1 > number2 ? number1 : number2;
    console.log(large);
}
larger(3, 6);

function showOddOrEven(number) {
    if (number % 2 === 0)
        console.log(number, 'Even');
    if (number % 2 !== 0) 
        console.log(number, 'ODD');
}
showOddOrEven(10);