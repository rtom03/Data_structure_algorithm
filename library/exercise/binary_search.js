let states = [
    "California", "Texas", "New York", "Florida", "Illinois", "Pennsylvania", "Ohio", "Georgia", "North Carolina", "Michigan",
    "New Jersey", "Virginia", "Washington", "Arizona", "Massachusetts", "Tennessee", "Indiana", "Missouri", "Maryland", "Wisconsin",
    "Colorado", "Minnesota", "South Carolina", "Alabama", "Louisiana", "Kentucky", "Oregon", "Oklahoma", "Connecticut", "Iowa",
    "Mississippi", "Arkansas", "Utah", "Nevada", "New Mexico", "West Virginia", "Nebraska", "Idaho", "Hawaii", "Maine",
    "New Hampshire", "Montana", "Rhode Island", "Delaware", "South Dakota", "North Dakota", "Alaska", "Vermont", "Wyoming", "Kansas"
];
function binarySearch(arr, search) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2)
    while (arr[middle] !== search && start <= end) {
        console.log(arr[start], arr[middle], arr[end])
        if (arr[middle] < search) {
            start = middle + 1;
        } else {
            end = middle - 1
        }
        middle = Math.floor((start + end) / 2)
        console.log(arr[start], arr[middle], arr[end])

    }
    return arr[middle];
}

const value = binarySearch(states, "Wyoming")
console.log(value)
