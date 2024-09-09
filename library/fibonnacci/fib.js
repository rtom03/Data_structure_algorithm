function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2)
}

let fb = fib(5)
console.log(fb)

function fibonnacci(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    let res = fibonnacci(n - 1, memo) + fibonnacci(n - 2, memo);
    memo[n] = res;
    return res
}

let res = fibonnacci(100)
console.log(res)