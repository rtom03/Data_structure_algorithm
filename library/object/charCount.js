function charCount(str){
    let folder = {};
    for(let element of str){
        // /[a-z0-9]/.test
        if(isAlphaNumeric(element)){
            element = element.toLowerCase();
            (folder[element] > 0) ? folder[element]++  : folder[element]= 1;
        }
    }
    return folder;
}
let val = charCount('Your Rate Has Plumbered')
console.log(val);

console.log('for of Performance')


// checking for performance

function charCountPerf(str){
    let element = {};
    
    for(let item of str){
        if(isAlphaNumeric(item)){
            item = item.toLowerCase();
            element[item] = ++element[item] || 1;
        }
    }
    return element;
    
}

let res = charCountPerf('New Trend');
console.log(res)


function isAlphaNumeric(char){
    const code = char.charCodeAt(0);
    
    if(!(code > 47 && code < 58)&&
       !(code > 64 && code < 91)&&
       !(code > 96 && code < 123)){
        return false
       }
       return true;
}



function charCount(file){
     let folder = {};
     for(let key of file){
       key = key.toLowerCase();
        if(/[a-z0-9]/.test(key))
        folder[key] = ++folder[key]  || 1;
     }
     return folder;   
}

const values = charCount('Morse code')
console.log(values);