const result = document.getElementById('result');
const placeHuman = document.querySelector('.your-score span');
const placeMachine = document.querySelector('.machine-score span');
let machineScoreNumber = 0;
let humanScoreNumber = 0;

const playHuman = (humanChoice) => {
    console.log(humanChoice)
    console.log('Retorno ' + playMachine())

    playTheGame(humanChoice, playMachine())
}
const playMachine = () => {
    const choice = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)

    console.log(randomNumber)
    return choice[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' Machine: ' + machine)
    if (human === machine) {
        result.innerHTML = 'Deu empate'
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {
           humanScoreNumber++ 
        result.innerHTML = 'Você ganhou'
        placeHuman.innerHTML = humanScoreNumber
    } else {
        machineScoreNumber++
        placeMachine.innerHTML = machineScoreNumber
        
        result.innerHTML = 'Você perdeu para a Alexa'
    }
}


