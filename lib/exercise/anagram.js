function anagram(str1, str2) {
    let lookup1 = {}

    for (let val of str1) {
        lookup1[val] = (lookup1[val] || 0) + 1
    }
    for (let val of str2) {
        if (!lookup1[val]) {
            return false;
        } else {
            lookup1[val] -= 1;
        }
    }
    console.log(lookup1)
    return true
}
let value = anagram('anagram', 'nagaram')
console.log(value)