


function binarySearch(arr, search) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2)
  while (arr[middle] !== search && start <= end) {
    console.log(start, middle, end)
    if (arr[middle] < search) {
      start = middle + 1;
    } else {
      end = middle - 1
    }
    middle = Math.floor((start + end) / 2)
  }
  return middle;
}

const value = binarySearch([1, 2, 3, 4, 5], 4)
console.log(value)
