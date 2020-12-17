// return n'th number of fibonacci sequence
let displayOutput = document.querySelector(".output");

const fibonacci = (n: number) => {
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
} 


displayOutput.innerHTML = `Output: ${fibonacci(8)}`;

