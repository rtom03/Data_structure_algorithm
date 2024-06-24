function showering(){
   return 'showering'
}

function breakFast(){
    let meal = cooking();
    return `Eating ${meal}`;
}

function cooking(){
    let food = ['beans','protein shake','french toast']
    return food[Math.floor(Math.random()*food.length)];
}

function toWork(){
    showering()
    breakFast()
    console.log('ready to go to work')
}

toWork()
console.log(toWork())

