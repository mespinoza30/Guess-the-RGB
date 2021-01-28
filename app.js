let squareOne = document.querySelector("#squareOne")
let squareTwo = document.querySelector("#squareTwo")
let squareThree = document.querySelector("#squareThree")
let squares = document.querySelector(".squares")
let button =document.querySelector("#newColorButton")
document.querySelector("#RGB").innerHTML
let correctAnswer =""

function randomNumber() {
    return Math.floor(Math.random() * 255);
}

button.addEventListener('click', function(event) {
    let num1 = randomNumber()
    let num2 = randomNumber()
    let num3 = randomNumber()

    const arrayOfColors=['rgb(' + num1 + ',' + num2 + ',' + num3 + ')', 'rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber() + ')', 'rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber() + ')']
    console.log(arrayOfColors)
    let solutionColor = arrayOfColors[Math.floor(Math.random() * 3)]
    console.log(solutionColor)
    document.querySelector('#RGB').innerHTML = solutionColor;
    squareOne.style.backgroundColor = arrayOfColors[0];
    squareTwo.style.backgroundColor = arrayOfColors[1];
    squareThree.style.backgroundColor = arrayOfColors[2];
    correctAnswer = solutionColor
});
