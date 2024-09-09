function anagrams(str1, str2) {
    let lookup1 = {}
    let lookup2 = {}

    for (let x of str1) {
        lookup1[x] = ++lookup1[x] || 1
    }
    for (let x of str2) {
        lookup2[x] = ++lookup2[x] || 1
    }

    for (let key in lookup1) {
        if (!(key in lookup2)) {
            return false
        }
        if (lookup2[key] !== lookup1[key]) {
            return false
        }
    }
    return true;
}

let str = anagrams('bnagrams', 'nagarams')
console.log(str)



function validAnagrams(str1, str2) {
    let lookup = {}
    for (let x of str1) {
        lookup[x] ? lookup[x] + 1 : lookup[x] = 1
    }
    for (let x of str2) {
        if (!lookup[x]) {
            return false;
        }
        lookup[x] -= 1;
    }
    return true;
}

let res = validAnagrams('bus', 'sub')
console.log(res)