// const mainBody = document.querySelector(".main-body");
// const span = document.querySelector(".color");
// const button = document.querySelector(".change-color");

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, "0")}`;
// }

// button.addEventListener("click", function () {
//   const randomColor = getRandomHexColor();
//   mainBody.style.backgroundColor = randomColor;
//   span.textContent = randomColor;
// });

const digit1 = document.querySelector(".digit1");
const digit2 = document.querySelector(".digit2");
const digit3 = document.querySelector(".digit3");
const digit4 = document.querySelector(".digit4");
const digit5 = document.querySelector(".digit5");
const digit6 = document.querySelector(".digit6");
const digit7 = document.querySelector(".digit7");
const digit8 = document.querySelector(".digit8");
const digit9 = document.querySelector(".digit9");
const digit0 = document.querySelector(".digit0");

const clean = document.querySelector(".clear");
const back = document.querySelector(".back");
const dot = document.querySelector(".dot");

const plus = document.querySelector(".operator-plus");
const minus = document.querySelector(".operator-minus");
const multiply = document.querySelector(".operator-multiply");
const divide = document.querySelector(".operator-divide");
const calculate = document.querySelector(".calculate");

const display = document.querySelector(".display");

digit1.addEventListener("click", () => {
  display.value += digit1.textContent;
});

digit2.addEventListener("click", () => {
  display.value += digit2.textContent;
});

digit3.addEventListener("click", () => {
  display.value += digit3.textContent;
});

digit4.addEventListener("click", () => {
  display.value += digit4.textContent;
});

digit5.addEventListener("click", () => {
  display.value += digit5.textContent;
});

digit6.addEventListener("click", () => {
  display.value += digit6.textContent;
});

digit7.addEventListener("click", () => {
  display.value += digit7.textContent;
});

digit8.addEventListener("click", () => {
  display.value += digit8.textContent;
});

digit9.addEventListener("click", () => {
  display.value += digit9.textContent;
});

digit0.addEventListener("click", () => {
  display.value += digit0.textContent;
});

clean.addEventListener("click", () => {
  display.value = "";
});

back.addEventListener("click", () => {
  let number = display.value;
  let numbersArr = number.split("");
  numbersArr.splice(-1, 1);
  display.value = numbersArr.join("");
});

dot.addEventListener("click", () => {
  display.value += dot.textContent;
});

plus.addEventListener("click", () => {
  display.value += plus.textContent;
});

minus.addEventListener("click", () => {
  display.value += minus.textContent;
});

multiply.addEventListener("click", () => {
  display.value += multiply.textContent;
});

divide.addEventListener("click", () => {
  display.value += divide.textContent;
});

calculate.addEventListener("click", () => {
  const expression = display.value;
  const result = eval(expression);
  display.value = result;
});