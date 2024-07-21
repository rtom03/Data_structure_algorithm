
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
// console.log(val)


function CountTheUniques(arr){
    let index = 0;
    let folder = {1:1};
    for(let lastIndex = 1; lastIndex < arr.length; lastIndex++){
        if(arr[index] !== arr[lastIndex]){
            index++;
            arr[index] = arr[lastIndex]
            let file = arr[index];
            folder[file] = file++;
        }
    }
    console.log(folder)
    return index + 1;
}

{
1 !== 2
2 !== 3
3 !== 4
4 !== 5
5 !== 6
6 !== 7
7 !== 8 
}

const file = CountTheUniques([1,2,3,4,4,5,5,6,6,7,8])
console.log(file);