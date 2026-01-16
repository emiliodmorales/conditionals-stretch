const maxMagicNumber = 10;

let score = 0;
let attempts = 0;

let magicNumber;
function newMagicNumber() {
  magicNumber = Math.floor(Math.random() * (maxMagicNumber - 1)) + 1;
  console.log("New magic number is " + magicNumber);
}
newMagicNumber();

console.log("New magic number is " + magicNumber);

function changeResponse(newText) {
  document.getElementById("response").textContent = newText;
}

addEventListener("submit", (event) => {
  event.preventDefault();
  let answerInput = Number(document.forms["myForm"]["answer"].value);
  attempts++;

  if (Number.isNaN(answerInput)) {
    changeResponse("You must enter a number");
  } else if (answerInput < 1 || answerInput > maxMagicNumber) {
    changeResponse(`Your number has to be between 1 and ${maxMagicNumber}`);
  } else if (answerInput < magicNumber) {
    changeResponse(`${answerInput} is too low`);
  } else if (answerInput > magicNumber) {
    changeResponse(`${answerInput} is too high`);
  } else if (answerInput === magicNumber) {
    newMagicNumber();

    const points = 5 - attempts;
    score += points;
    changeResponse(
      `${answerInput} was the magic number. You got it in ${attempts} attempts. A new magic number has been made.`
    );

    attempts = 0;
    document.getElementById("score").textContent = `Your score: ${score}`;
  }

  document.getElementById("answer").value = "";
});
