let squareOne = document.querySelector("#squareOne")
let squareTwo = document.querySelector("#squareTwo")
let squareThree = document.querySelector("#squareThree")
let squares = document.querySelector(".squares")
let button =document.querySelector("#newColorButton")
document.querySelector("#RGB").innerHTML
let correctAnswer =""
let results = document.querySelector("#results")
let solutionColor = Math.floor(Math.random() * 3)

function randomNumber() {
    return Math.floor(Math.random() * 255);
}

button.addEventListener('click', function(event) {

    const arrayOfColors=['rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber() + ')', 'rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber() + ')', 'rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber() + ')']
    console.log(arrayOfColors)
    let solutionColor = arrayOfColors[Math.floor(Math.random() * 3)]
    console.log(solutionColor)
    document.querySelector('#RGB').innerHTML = solutionColor;
    squareOne.style.backgroundColor = arrayOfColors[0];
    squareTwo.style.backgroundColor = arrayOfColors[1];
    squareThree.style.backgroundColor = arrayOfColors[2];
    correctAnswer = solutionColor
    results.innerText = ""
});

squareOne.addEventListener('click', function(event) {
    if(solutionColor == 0) {
        results.innerText = "You are right!"
    }else{
        results.innerText ="Try again"
    }
});

squareTwo.addEventListener('click', function(event) {
    if(solutionColor == 1) {
        results.innerText = "You are right!"
    }else{
        results.innerText ="Try again"
    }
});

squareThree.addEventListener('click', function(event) {
    if(solutionColor == 2) {
        results.innerText = "You are right!"
    }else{
        results.innerText ="Try again"
    }
});
