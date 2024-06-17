function atLeast(min,max){
    for(let i = 1; i <= Math.min(5, min);i++){
        console.log(i)
    }
    console.log('then max')
   
    for(let i = 1; i <= Math.max(5, max);i++){
        console.log(i)
    }

}

let val = atLeast(10,10)
console.log(val)