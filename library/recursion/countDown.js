function countDown(num){
     if(num <= 0){
        console.log('All Done')
        return;
     }
     console.log(num);
     num--;
     countDown(num);
}

let val = countDown(5)
console.log(val)