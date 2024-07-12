function binarySearch(arr, search) {
    let start = 0;
    let end = arr.length - 1;
    let middle = (Math.floor(start + end) / 2);
    let output = []
    while (start < end) {
        if (arr[middle] === search) return search;
        if (arr[middle] > search) {
            end = middle;
            middle = Math.floor((start + end) / 2)
            if (arr[middle] == search)
                output.push(arr[middle]);
            middle--
        } else {
            if (arr[middle] < search) {
                start = middle;
                middle = Math.floor((start + end) / 2)
                if (arr[middle] == search)
                    output.push(arr[middle]);
                middle++;
            }

        }
    }
    return output;
}



let val = binarySearch([1, 3, 4, 5, 6, 7, 9, 10], 10)