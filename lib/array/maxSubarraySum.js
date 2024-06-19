// Naive solution 

function maxSubarraySum(arr, num){
    if(num > arr.length) return null;

let max = -Infinity;
for(let i = 0; i < arr.length - num + 1; i++){
   let temp = 0;
   for(let j = 0; j < num; j++){
    temp += arr[i + j];
    // console.log(temp)
   }
   if (temp > max){
    max = temp;
   }
  }
  return max;
}

const val = maxSubarraySum([1,2,3,5,4,6,],3)
// console.log(val)


// sliding window

function MaxSubarraySum(arr,num){
  let maxSum = 0;
  let tempSum = 0;
  if(arr.length < num) return null;

  for(let i = 0; i < num; i++){
   maxSum +=arr[i];
  }
  tempSum = maxSum;
  for(let i = num; i < arr.length; i++) {
    console.log(tempSum)
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum)
  }
  // return maxSum;
}


const values = MaxSubarraySum([1,4,3,2,1,3,3,2,1],3)
console.log(values)

