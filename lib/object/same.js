// Frequency function Naive solution 

function same(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    for(let i = 0; i < arr1.length; i++){
        let correctedIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctedIndex === -1){
            return false;
        }        
        arr2.splice(correctedIndex,1)
        console.log(arr2)
    }
    return true;
}

let val = same([1,2,3],[1,4,9])
console.log(val);