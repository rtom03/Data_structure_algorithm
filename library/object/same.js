function same(arr,search){
   if(arr.length !== search.length){
    return false;
   }
   let folder = {}
   for(let i =0; i < arr.length;i++){
    let key = arr[i]
    let val = key ** 2;
    folder[val] = (folder[val] || 0)+1;
        if(val !== search[i]){
            return false;
        }
   }
   console.log(folder)
     return true
}

const val = same([2,3,4,5,5],[4,9,16,25,25])
console.log(val)



function sameEffiecient(arr,search){
    if(arr.length !== search.length){
        return false;
       }
       let frequencyCounter1 = {};
       let frequencyCounter2 = {};

       for(let val of arr){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0)+1;
        console.log(frequencyCounter1)
       }
       for(let val of search){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1;
        // console.log(frequencyCounter2)
       }

       for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
       }
       console.log(frequencyCounter1,frequencyCounter2)
    return true;
}

const value = sameEffiecient([1,2,3,4],[1,4,9,16])

console.log(value)