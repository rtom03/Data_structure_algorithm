function same(arr1,arr2){

    if(arr1.length !== arr2.length){
        return false;
    }

    let frequenciesCounter1 = {};
    let frequenciesCounter2 = {};

    for(let val of arr1){
        frequenciesCounter1[val] = (frequenciesCounter1[val] || 0)+1;
    }
    for(let val of arr2){
        frequenciesCounter2[val] = (frequenciesCounter2[val] || 0)+1;
    }

    for(let key in frequenciesCounter1){
        if(!(key ** 2 in frequenciesCounter2)){
            return false;
        }
        if(frequenciesCounter2[key ** 2] !== frequenciesCounter1[key]){
            return false;
        }
    }
    console.log(frequenciesCounter1)
    console.log(frequenciesCounter2)
    return true;
}

let val = same([1,2,3,4,2],[1,16,9,4,4]);
console.log(val);