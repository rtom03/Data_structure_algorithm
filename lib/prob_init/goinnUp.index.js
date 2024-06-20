function GoinUp(n){
    console.log('Our Rate Is Going Up...')
    for(let i = 1;i <= n ; i++){
        console.log(i)
    }
    console.log('Your Rate is Going Down...')
    for(let x = n - 0; x >= 0; x--){
        console.log(x)
    }
    console.log(`your Rate Has Been Plumbered ${'You are Out'}`)
}

let val = GoinUp(20)
console.log(val)




