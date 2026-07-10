import "./style.css";

// let storebtn = document.querySelector("#btn");
// let storeul = document.querySelector("#open");

// storebtn.addEventListener("click", () => {
//   storeul.classList.toggle("show");
// });

// window.addEventListener("resize", () => {
//   if (window.innerWidth > 720) {
//     storeul.classList.remove("show");
//   }
// });

// let storebtntwo = document.querySelector("#btnl");
// let storeultwo = document.querySelector("#showl");

// storebtntwo.addEventListener("click", () => {
//   storeultwo.classList.toggle("showtwo");
// });

// window.addEventListener("resize", () => {
//   if (window.innerWidth > 600) {
//     storeultwo.classList.remove("showtwo");
//   }
// });

import "./style.css";

let storebtn = document.querySelector("#btn");
let storeul = document.querySelector("#open");

if (storebtn && storeul) {
  storebtn.addEventListener("click", () => {
    storeul.classList.toggle("show");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) {
      storeul.classList.remove("show");
    }
  });
}

let storebtntwo = document.querySelector("#btnl");
let storeultwo = document.querySelector("#showl");

if (storebtntwo && storeultwo) {
  storebtntwo.addEventListener("click", () => {
    storeultwo.classList.toggle("showtwo");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
      storeultwo.classList.remove("showtwo");
    }
  });
}
