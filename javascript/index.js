let charCount = function (str) {
    let char = {}
    for (let item of str) {
        if (/[a-z0-9]/.test(item))
            char[item] = ++char[item] || 1;
    }
    return char;
}




let same = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false
        }
        // arr2.splice(correctIndex, 1)
    }
    return true
}



let frequencyCounter = function (arr1, arr2) {
    let frequency = {}
    let frequency2 = {}

    for (let item of arr1) {
        frequency[item] = (frequency[item] || 0) + 1
    }

    for (let item of arr2) {
        frequency2[item] = (frequency2[item] || 0) + 1
    }

    for (let key in frequency) {
        if (!(key ** 2 in frequency2)) {
            return false
        }
        // if (frequency2[key ** 2] !== frequency[key]) {
        //     return false
        // }
    }
    return true

}


const value = frequencyCounter([1, 2, 3, 4, 5], [1, 4, 9, 16, 25])

console.log(value)