// change back-ground-color
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.classList.toggle("body-red");
});

// change the text
const h1 = document.getElementById("hello");
const textBtn = document.getElementById("textBtn");
const backBtn = document.getElementById("backBtn");

textBtn.addEventListener("click", () => {
  h1.textContent = "changed!!!";
});

backBtn.addEventListener("click", () => {
  h1.textContent = "hello";
});
