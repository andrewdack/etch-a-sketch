const content = document.querySelector(".content");

let boxCount = 0;
for (let i = 1; i <= 16 * 16; i++) {
  let box = document.createElement("div");
  box.classList.add("box");
  content.appendChild(box);
  boxCount++;
}

const tiles = document.querySelectorAll(".box");

tiles.forEach((t) => {
  t.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "red";
  });

  t.addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = "white";
  })
});
