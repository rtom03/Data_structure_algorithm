// search for smaller strings in a longer strings

function stringSearch(arr,search){
      for(let i= 0; i < arr.length; i++){
        for(let j = 0; j < search.length; j++){
            console.log(arr[i],search[j])
        }
      }
}

const value = stringSearch('your rate has plumbered','rate')
console.log(value)