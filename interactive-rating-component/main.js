const button = document.querySelector(".submit");
const thank_state = document.querySelector(".thank-you-state");
const rating_state = document.querySelector(".rating-state");
const score_1 = document.getElementById("1");
const score_2 = document.getElementById("2");
const score_3 = document.getElementById("3");
const score_4 = document.getElementById("4");
const score_5 = document.getElementById("5");

var score = 0;

button.addEventListener("click", () => {
  thank_state.style.display = "flex";
  rating_state.style.display = "none";
});

score_1.addEventListener("click", () => {
  score = 1;
  document.getElementById("score").innerHTML = score;
});

score_2.addEventListener("click", () => {
  score = 2;
  document.getElementById("score").innerHTML = score;
});

score_3.addEventListener("click", () => {
  score = 3;
  document.getElementById("score").innerHTML = score;
});

score_4.addEventListener("click", () => {
  score = 4;
  document.getElementById("score").innerHTML = score;
});

score_5.addEventListener("click", () => {
  score = 5;
  document.getElementById("score").innerHTML = score;
});
