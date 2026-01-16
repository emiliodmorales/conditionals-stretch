const magicNumber = Math.floor(Math.random() * 9) + 1;
console.log("New magic number is " + magicNumber);

let answerInput = Number(prompt("Guess a number between 1 and 10"));

while (answerInput !== magicNumber) {
  if (Number.isNaN(answerInput)) {
    alert("You must enter a number");
  } else if (answerInput < 1 || answerInput > 10) {
    alert("Your number has to be between 1 and 10");
  } else if (answerInput < magicNumber) {
    alert("Sorry your answer was too low");
  } else if (answerInput > magicNumber) {
    alert("Sorry your answer was too high");
  }
  answerInput = Number(prompt("Guess a number between 1 and 10"));
}
alert("You got it right");
