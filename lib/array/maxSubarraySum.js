// Naive solution 

function maxSubarraySum(arr, num){
    if(num > arr.length) return null;

let max = -Infinity;
for(let i = 0; i < arr.length - num + 1; i++){
   let temp = 0;
   for(let j = 0; j < num; j++){
    temp += arr[i + j];
   }
   if (temp > max){
    max = temp;
   }
  }
  return max;
}



// function maxSubarraySum(arr){
//    let i = 0;
//    let folder = {};
//    for(let j = 1; j < arr.length; j++){
     
//    }
//    return i;

// }

const val = maxSubarraySum([1,2,3,5,4,6,7,8,9,1,2],4)
console.log(val)