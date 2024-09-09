function same(arr1, arr2) {
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let n of arr1) {
        frequencyCounter1[n] = ++frequencyCounter1[n] || 1;
        // console.log(frequencyCounter1)
    }
    for (let n of arr2) {
        frequencyCounter2[n] = ++frequencyCounter2[n] || 1;
        // console.log(frequencyCounter2)
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }

        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true;

}

let sm = same([1, 2, 3], [1, 4, 9])
console.log(sm)


// 

function naiveSame(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === - 1) {
            return false
        }
        arr2.splice(correctIndex, 1)
    }
    return true;
}


let m = same([1, 2, 3], [1, 4, 9])
console.log(m)
