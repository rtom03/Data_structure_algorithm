function multiplePointer(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let sum = arr[start] + arr[end];
        if (sum === 0) {
            return [arr[start], arr[end]]
        } else if (sum > 0) {
            end--;
        }
        start++
    }
    return arr
}
let value = multiplePointer([-3, -2, -1, 0, 1, 2, 10])
console.log(value)