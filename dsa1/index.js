function charCount(str) {
    let obj = {}

    // for (let i = 0; i <= str.length - 1; i++) {
    //     let n = str[i]
    //     obj[n] = i + 1
    // }
    for (let i of str) {
        if (alphaNumeric(i)) {
            obj[i] = ++obj[i] || 1;
        }
    }
    return obj
}

let rs = charCount('aaaabb')
console.log(rs)




function alphaNumeric(char) {
    const code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
        return false
    }
    return true;
}



