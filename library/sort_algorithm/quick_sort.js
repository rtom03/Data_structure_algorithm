function pivot(array, start = 0, end = array.length - 1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    };
    // function swap(arr, idx1, idx2) {
    //     let temp = arr[idx1]
    //     arr[idx1] = arr[idx2]
    //     arr[idx2] = temp
    // }

    let pivotal = array[start];
    let swapidx = start
    for (let i = start + 1; i <= end; i++) {
        if (pivotal > array[i]) {
            swapidx++;
            swap(array, swapidx, i)
            // console.log(array)
        }
    }
    swap(array, start, swapidx)
    return swapidx;
}
const src = pivot([5, 8, 1, 3, 6, 2, 4, 7])
console.log(src)

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)

        quickSort(arr, left, pivotIndex - 1)

        quickSort(arr, pivotIndex + 1, right)
    }
    return arr;
}
const dir = quickSort([4, 2, 6, 3, 1, 5, 8, 7])
console.log(dir)
