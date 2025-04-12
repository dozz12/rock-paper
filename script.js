function playerChoice(choice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('playerChoiceText').innerText = choice;
    document.getElementById('computerChoiceText').innerText = computerChoice;

    const result = determineWinner(choice, computerChoice);
    document.getElementById('gameResult').innerText = result;
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a draw!";
    }

    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return "You win!";
    }

    return "You lose!";
}
