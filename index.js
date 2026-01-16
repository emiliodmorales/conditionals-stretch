let score = 0;

let magicNumber = Math.floor(Math.random() * 9) + 1;
console.log("New magic number is " + magicNumber);

function changeResponse(newText) {
  document.getElementById("response").textContent = newText;
}

addEventListener("submit", (event) => {
  event.preventDefault();
  let answerInput = Number(document.forms["myForm"]["answer"].value);

  if (Number.isNaN(answerInput)) {
    changeResponse("You must enter a number");
  } else if (answerInput < 1 || answerInput > 10) {
    changeResponse("Your number has to be between 1 and 10");
  } else if (answerInput < magicNumber) {
    changeResponse("Sorry your answer was too low");
  } else if (answerInput > magicNumber) {
    changeResponse("Sorry your answer was too high");
  } else if (answerInput === magicNumber) {
    magicNumber = Math.floor(Math.random() * 9) + 1;
    console.log("New magic number is " + magicNumber);

    changeResponse("You got it right. A new magic number has been made.");

    score++;
    document.getElementById("score").textContent = `Your score: ${score}`;
  }

  document.getElementById("answer").value = "";
});
