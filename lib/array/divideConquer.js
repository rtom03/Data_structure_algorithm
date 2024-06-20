//naive solution
function search(arr,search){
let file=[]
   for(let i = 0; i <= arr.length;i++){
   file = arr[i]
  if(file === search) {
    return i;
  }
  else{
    return -1
  }
   }
  return file;
}

const value = search([1,2,3,4,5],6)
console.log(value)


function binarySearch(arr,search){
  let min = 0;
  let max = arr.length -1;
  while(min <= max) {
    let middle = Math.floor((min + max) / 2)
    let currentElement = arr[middle];

    if(arr[middle] < val) {
      min = middle + 1
    }
  }
}
