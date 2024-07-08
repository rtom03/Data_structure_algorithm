function merge(arr1,arr2){
    let folder = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            folder.push(arr1[i])
            i++;
        }else{
            folder.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length){
        folder.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        folder.push(arr2[j])
        j++
    }
    return folder;
}
const src = merge([23,63,83,93],[33,43,73,103])
console.log(src)

function mergeSort(array){
    if(array.length <= 1) return array;
    let middle = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0,middle));
    let right = mergeSort(array.slice(middle))
    return merge(left,right)

}

const components = mergeSort([63,23,103,33,83,73,43,93])
console.log(components)