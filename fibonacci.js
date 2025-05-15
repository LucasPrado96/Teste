function isFibonacci(num){
    let a = 0;
    let b = 1;

    while (b < num) {
    let fib = b;
    b = a + b;
    a = fib;
}

return b === num || num === 0;
}



const isFibonacciNumber = 34;

if(isFibonacci(isFibonacciNumber)){
console.log(`${isFibonacciNumber} Pertence à sequência de Fibonacci.`)
} else {
    console.log(`${isFibonacciNumber} Não pertece à sequência de Fibonacci`)
}