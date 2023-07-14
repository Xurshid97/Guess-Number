let btn = document.getElementById('subm')
let rand = Math.floor(Math.random()*10)

let newEl = document.createElement('div')
let parentDiv = document.getElementById('parent')
let counter = 5


btn.addEventListener('click', ()=> {
    let userInput = document.querySelector('input')
    checker = Number(userInput.value)
    if(counter <= 0) {
        newEl.innerHTML = `You lost the game`
        return parentDiv.appendChild(newEl)
    }
    else {
        if(checker > rand) {
            newEl.innerHTML = `Enter smaller number, you have entered ${checker}` 
            
        }
        else if(checker < rand) {
            newEl.innerHTML = `Enter bigger number, you have entered ${checker}`
        }
        else if(checker === rand) {
            newEl.innerHTML = `Congratulations, secret number is ${checker}, you have found it in ${counter} times`
        }
    }
    console.log(counter);
    counter--
    parentDiv.appendChild(newEl)
    userInput.value = ''
})