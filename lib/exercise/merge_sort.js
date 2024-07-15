function merge(arr1, arr2) {
    let folder = []
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            folder.push(arr1[i])
            i++;
        } else {
            folder.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) {
        folder.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        folder.push(arr2[j])
        j++
    }
    return folder;

}
// merge two seperate arrays together
const value = merge([2, 4, 6, 8], [1, 3, 5, 7])
console.log(value)



function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let middle = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, middle))
    let right = mergeSort(arr.slice(middle))
    return merge(left, right)
}

const val = mergeSort([1, 8, 2, 7, 3, 6, 4, 5])
console.log(val)