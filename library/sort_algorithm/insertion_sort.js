function insertSort(arr){
    for(var i = 1; i < arr.length; i++){
        var currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal;j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}
const value = insertSort([1,2,3,76,13])
console.log(value)