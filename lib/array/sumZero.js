
// Naive solution
function sumZero(arr){
    for(let i = 0;i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                console.log(arr[i],arr[j])
                return [arr[i],arr[j]]
            }
        }
    }
}

let val = sumZero([-3,-2,-1,0,1,2,3])
console.log(val)


// ~Multiple Pointers: creating pointers or values that correspond to an index or position and
// move towards the beginning,end or middle based on a certain condition
// very efficient for solving problems with minimal space complexity as well. 

// for of performance
function theSumZero(arr){
    let right = arr.length -1;
    let left = 0;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]]
        }
        else if(sum > 0) {
            right--;
        }
        else {
            left++;
        }
    }
}

let res = theSumZero([-3,-2,-1,0,1,2,4])
console.log(res)