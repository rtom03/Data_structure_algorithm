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
        console.log(anagram2[key],key)
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

let val = validAnagrams('cup','cpu')
console.log(val)