function merge(arr1,arr2){
    let empty = [];
    let i =0;
    let j = 0;
        while(i < arr1.length && j < arr2.length ){
            if(arr1[i] < arr2[j]){
                empty.push(arr1[i])
                i++;
            }
                empty.push(arr2[j])
                j++;
        }
        while(i < arr1.length){
            empty.push(arr1[i])
            i++
        }
        while(j < arr2.length){
            empty.push(arr2[j])
            j++;
        }
    return empty;

}
const val = merge([1,3,5,6],[2,4,7,8])
// console.log(val)
// [1,2,]


function mergeSort(folder){
    if(folder.length <= 1) return folder;
    let mid = Math.floor(folder.length / 2)
    let left = mergeSort(folder.slice(0,mid))
    let right = mergeSort(folder.slice(mid))
    return merge(left,right)

    // while(i < folder.length - 4 && j < folder.length){
    //     if(folder[i] < folder[j]){
    //         subFolder1.push(folder[first])
    //          i+1;
    //     }
    //     subFolder2.push(folder[j])
    //     j+1;
    // }
   

}
const element = mergeSort([1,5,6,7,2,3,4,8])
console.log(element)