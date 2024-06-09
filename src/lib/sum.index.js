
function addUpTo(n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}
var time1 = performance.now();
console.log(addUpTo(10000000))
var time2 = performance.now()
console.log(`Time Elapsed:${(time2 - time1) / 1000} seconds`)
// low time complexity
function addUpTo2(n){
    return n * ( n + 1 ) / 2;
}
var time1 = performance.now();
console.log(addUpTo2(10000000))
var time2 = performance.now()
console.log(`Time Elapsed:${(time2 - time1) / 1000} seconds`)
