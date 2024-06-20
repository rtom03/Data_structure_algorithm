function double(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
         newArr.push(2 * arr[i])
    }
    return newArr
}

let val = double([1,2,3])
console.log(val)