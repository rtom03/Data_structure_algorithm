
// ~Multiple Pointers: creating pointers or values that correspond to an index or position and
// move towards the beginning,end or middle based on a certain condition
// very efficient for solving problems with minimal space complexity as well. 



function countUniqueValues(arr){
    if(arr.length === 0){
        return 0;
    }
    let i = 0;
    for(let j = 1; j < arr.length; j++){
      if(arr[i] !== arr[j]){
        i++;
        arr[i] = arr[j]
      }
    }
    return i +1;
}


const val = countUniqueValues([1,1,2,2,3,3,4,5,6,7,7,8,8,8,9])
console.log(val)