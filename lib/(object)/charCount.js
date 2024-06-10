function charCount(str){
    var result = {};
    for(var n = 0; n < str.length; n++){
        var char = str[n].toLowerCase()
        if(/[a-z0-9]/.test(char)){
            if(result[char] > 0 ){
                result[char]++;
            }
            else{
                result[char] = 1;
            }
        }
        }
    return result;
}
var val = charCount('How hare you');
console.log(val)