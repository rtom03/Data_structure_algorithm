function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}


function radixSort(nums) {
    let maxDigitsCounts = mostDigits(nums)
    for (let k = 0; k < maxDigitsCounts; k++) {
        let bucket = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digits = getDigit(nums[i], k);
            bucket[digits].push(nums[i])
        }
        nums = [].concat(...bucket)
    }
    return nums;
}

const value = radixSort([123, 321, 231, 132, 4543, 9093, 1010, 1101])
console.log(value)