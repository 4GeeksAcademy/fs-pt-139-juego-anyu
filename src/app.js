const choices = ["rock", "paper", "scissors", "lizard", "spock"];

const rules = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["scissors", "rock"],
};

const buttons = document.querySelectorAll(".choice-btn");
const userChoiceText = document.querySelector("#user-choice");
const computerChoiceText = document.querySelector("#computer-choice");
const resultText = document.querySelector("#result");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const userChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();

    userChoiceText.textContent = `User chose: ${userChoice}`;
    computerChoiceText.textContent = `Computer chose: ${computerChoice}`;

    const result = getResult(userChoice, computerChoice);
    resultText.textContent = result;
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a draw!";
  }

  if (rules[userChoice].includes(computerChoice)) {
    return "You win!";
  }

  return "You lose";
}

