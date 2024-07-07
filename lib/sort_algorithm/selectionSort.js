function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i + 1; j < arr.length; j++ ){
            if(arr[lowest] > arr[j]){
               lowest = j;
            }
          }
          if(i !== lowest){
            console.log(i,lowest)
            var temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp;
          }
    }
    return arr;
}

const value = selectionSort([3,6,34,22,12,44,10])
console.log(value)



function selectionSortEs15(array){
    const swap = (arr, idx1,idx2) => 
    ( [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
    for(var i = 0; i < array.length; i++){
        var lowest = i;
        for(var j = i + 1; j < array.length; j++ ){
            if(array[lowest] > array[j]){
               lowest = j;
            }
          }
          if(i !== lowest) swap(array,i,j)
    }
return array;
}

const file = selectionSortEs15([4,6,33,23,5])
console.log(file)