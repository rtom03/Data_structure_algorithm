function uniqueCount(arr) {
    let start = 0;
    let output = 0
    for (let second = 1; second < arr.length; second++) {
        if (arr[start] !== arr[second]) {
            start++;
            arr[start] = arr[second]
            output = start;
            console.log(start, second)
        }
    }
    return output;
}
const value = uniqueCount([1, 1, 2, 3, 3, 4, 5,])
console.log(value)