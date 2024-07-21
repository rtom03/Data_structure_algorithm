
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

[
   // -3 + -2 = -1
   // -3 + -1 = -2
   // -3 + 1
   // -3 + 0
   // -3 + 1
   // -3 + 2
   // -3 + 3 === 0 
]

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

[
   // Morse {.. - / .. ... / ... --- .-. - . -..}
 
    -3 + 4 // = 1
    -3 + 2 // = -1
    -2 + 2 // = 0 


]

let res = theSumZero([-3,-2,-1,0,1,2,4])
console.log(res)


function sumToZero(arr){
    let index = 0;
    for(let i = 1; i < arr.length; i++){

    }
}

const values = sumToZero([-3,-2,-1,0,1,2,3])
console.log(values)