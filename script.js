"use strict";

const message = document.querySelector(".message");
const guess = document.querySelector(".guess-number");
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = document.querySelector(".highscore");

console.log(typeof number, number);
// console.log(typeof value, value);

document.querySelector(".check").addEventListener("click", function () {
  const value = Number(document.querySelector(".input-number").value);

  if (!value) {
    message.textContent = "⛔ No Number";
  } else if (value === number) {
    message.textContent = "🎉 You Won!";
    document.querySelector("body").style.backgroundColor = "#32CD32";
    highscore.textContent = score;
    guess.textContent = number;
    document.querySelector(".square").style.width = "15rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (value < number) {
    if (score > 1) {
      message.textContent = "📉 Number Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "😥 You Lost";
      document.querySelector(".score").textContent = 0;
    }
  } else if (value > number) {
    if (score > 1) {
      message.textContent = "📉 Number Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "😥 You Lost";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#2c2929";
  document.querySelector(".input-number").value = "";
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = 20;
  guess.textContent = "?";
  score = 20;
  document.querySelector(".square").style.width = "120px";
  console.log(number);
  message.textContent = "Start guessing...";
});
