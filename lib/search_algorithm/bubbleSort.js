//elementary sort
function bubbleSort(arr){
    for(var i = arr.length; i > 0; i--){
        // console.log(i)
        for(var j = 0; j < i - 1; j++){
            // console.log(j)
            // console.log(arr, arr[j],arr[j+1])
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

const value = bubbleSort([63,33,23,43])
console.log(value)

function bubbSort(array){
    var noSwaps;
    const swap = (array, idx1,idx2) => {
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]]
    };
    for(let i = array.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i - 1; j++){
            console.log(array, array[j],array[j+1])
            if(array[j] > array[j+1]){
                swap(array, j, j + 1)
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return array;
}
const res = bubbSort([63,23,32,40,43])
console.log(res)