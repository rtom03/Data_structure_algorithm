// frequency Pattern
//  ~Frequency Counter: This pattern uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or 0(N^2)
// operations with arrays / strings

function validAnagrams(str1,str2){
      if(str1.length !== str2.length){
        return false;
      }

      let anagram1 = {};
      let anagram2 = {};

      for(let val of str1){
        anagram1[val] = (anagram1[val] || 0)+1;
      }

      for(let val of str2){
        anagram2[val] = (anagram2[val] || 0)+1;
        // console.log(anagram2[val])
      }

      for(let key in anagram1){
        // console.log(anagram2[key],key)
        if(!(key in anagram2)){
            return false;
        }
        if(anagram2[key] !== anagram1[key] ){
            return false;
        }
      }
      console.log(anagram1,anagram2)
      return true;
}

// let val = validAnagrams('cup','cpu')
// console.log(val)



// other approach 

function theAnagram(fir,sec){
    if(fir.length !== sec.length){
        return false;
    }

    const lookUp = {};

    for(let i = 0; i < fir.length; i++){
        let letter = fir[i];
        lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1;
    }

    for(let i = 0; i < sec.length; i++){
        let letter = sec[i]
        if(! lookUp[letter]){
          return false;
        }
        // else{
        //     lookUp[letter] -= 1;
        // }
    }
    console.log(lookUp)
    return true;
}
{
    a:1
    n:1
    a:2
    g:1
    r:1
    a:3
    m:1
}

let res = theAnagram('anagram','naamrag')
console.log(res)