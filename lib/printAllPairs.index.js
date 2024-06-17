function printAllPairs(n){
    for(var i = 0; i < n; i++){
        for(var x = 0; x < n; x++){
            console.log(i,x)
        }
    }
}

let val = printAllPairs(5)
console.log(val)
