let states = [
    "California", "Texas", "New York", "Florida", "Illinois", "Pennsylvania", "Ohio", "Georgia", "North Carolina", "Michigan",
    "New Jersey", "Virginia", "Washington", "Arizona", "Massachusetts", "Tennessee", "Indiana", "Missouri", "Maryland", "Wisconsin",
    "Colorado", "Minnesota", "South Carolina", "Alabama", "Louisiana", "Kentucky", "Oregon", "Oklahoma", "Connecticut", "Iowa",
    "Mississippi", "Arkansas", "Utah", "Nevada", "New Mexico", "West Virginia", "Nebraska", "Idaho", "Hawaii", "Maine",
    "New Hampshire", "Montana", "Rhode Island", "Delaware", "South Dakota", "North Dakota", "Alaska", "Vermont", "Wyoming", "Kansas"
];
function merge(arr1, arr2) {
    let folder = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            folder.push(arr1[i])
            i++;
        } else {
            folder.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) {
        folder.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        folder.push(arr2[j])
        j++
    }
    return folder;
}
const src = merge([23, 63, 83, 93], [33, 43, 73, 103])
console.log(src)

function mergeSort(array) {
    while (array.length <= 1) return array;
    let middle = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, middle));
    let right = mergeSort(array.slice(middle))
    return merge(left, right)
}
// const largeArray = Array.from({ length: 1000000 }, (_, i) => Math.floor(Math.random() * 1000000));
const components = mergeSort(largeArray)
console.log(components)