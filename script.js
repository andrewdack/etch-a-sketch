//
const content = document.querySelector(".content");
const colorselector = document.querySelector("#colorselector");
let color = colorselector.value;

let boxCount = 0;
for (let i = 1; i <= 16 * 16; i++) {
  let box = document.createElement("div");
  box.classList.add("box");
  content.appendChild(box);
  boxCount++;
}

const tiles = document.querySelectorAll(".box");

let isMouseDown = false;

document.addEventListener("mousedown", () => {
  isMouseDown = true;
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

tiles.forEach((t) => {
  t.addEventListener("mouseover", (e) => {
    if (isMouseDown) {
      e.target.style.backgroundColor = color;
    }
  });
});

colorselector.addEventListener("change", (e) => {
  color = colorselector.value; //update values
});


const clearButton = document.querySelector("#clearbutton");

clearButton.addEventListener("click", () => {
  console.log("click")
  tiles.forEach((t) => {
    t.style.backgroundColor = "white";
  })
})

// // ==== Constants and Selectors ====
// const $form = document.querySelector('#form');
// const $input = document.querySelector('#input');
// const $submitButton = document.querySelector('#submit');
// const $output = document.querySelector('#output');

// // ==== Event Handler Functions ====
// function handleSubmit(e) {
//   e.preventDefault();
//   const value = $input.value.trim();
//   if (value) {
//     $output.textContent = `Hello, ${value}!`;
//     $input.value = '';
//   }
// }

// function handleInputChange() {
//   $submitButton.disabled = $input.value.trim() === '';
// }

// // ==== Event Listener Bindings ====
// function bindEventListeners() {
//   $form.addEventListener('submit', handleSubmit);
//   $input.addEventListener('input', handleInputChange);
// }

// // ==== Initialization ====
// function init() {
//   bindEventListeners();
//   handleInputChange(); // initial button state
// }

// document.addEventListener('DOMContentLoaded', init);