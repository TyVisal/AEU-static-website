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

// document.querySelectorAll(".delayed-link").forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault(); // stop immediate navigation
//     const destination = this.href;

//     setTimeout(() => {
//       window.location.href = destination;
//     }, 2000); // 2000ms = 2 seconds
//   });
// });

//invite.html file

document.querySelectorAll(".log-row").forEach((n) => {
  n.addEventListener("click", () => {
    if (window.innerWidth >= 500) return;

    const img = n.querySelector(".row-icon");
    const detailRow = n.nextElementSibling;

    const isExpanded = img.src.includes("remove.png");

    if (isExpanded) {
      img.src = img.src.replace("remove.png", "add.png");
      detailRow.classList.add("hidden");
    } else {
      img.src = img.src.replace("add.png", "remove.png");
      detailRow.classList.remove("hidden");
    }
  });
});

//paid file

// const modal = document.getElementById("paymentModal");

// document.querySelectorAll(".thtr-9393").forEach((row) => {
//   row.addEventListener("click", () => {
//     const d = row.dataset;

//     document.getElementById("modalTitle").textContent =
//       `ការបង់ប្រាក់ឆ្នាំទី ${d.year}`;
//     document.getElementById("modalId").textContent = d.id;
//     document.getElementById("modalAmount").textContent = d.amount;
//     document.getElementById("modalDate").textContent = d.date;
//     document.getElementById("modalReceptionist").textContent =
//       `Receiptionist : ${d.receptionist}`;
//     document.getElementById("modalDescription").textContent =
//       `Description : ${d.description}`;

//     modal.classList.remove("hidden");
//     modal.classList.add("flex");
//   });
// });

// function closeModal() {
//   modal.classList.remove("flex");
//   modal.classList.add("hidden");
// }

// document.getElementById("modalCloseX").addEventListener("click", closeModal);
// document.getElementById("modalCloseBtn").addEventListener("click", closeModal);

// // close modal when clicking the dark overlay itself
// modal.addEventListener("click", (e) => {
//   if (e.target === modal) closeModal();
// });

// paid file

const modal = document.getElementById("paymentModal");

if (modal) {
  document.querySelectorAll(".thtr-9393").forEach((row) => {
    row.addEventListener("click", () => {
      const d = row.dataset;

      document.getElementById("modalTitle").textContent =
        `ការបង់ប្រាក់ឆ្នាំទី ${d.year}`;
      document.getElementById("modalId").textContent = d.id;
      document.getElementById("modalAmount").textContent = d.amount;
      document.getElementById("modalDate").textContent = d.date;
      document.getElementById("modalReceptionist").textContent =
        `Receiptionist : ${d.receptionist}`;
      document.getElementById("modalDescription").textContent =
        `Description : ${d.description}`;

      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });
  });

  function closeModal() {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
  }

  document.getElementById("modalCloseX").addEventListener("click", closeModal);
  document
    .getElementById("modalCloseBtn")
    .addEventListener("click", closeModal);

  // close modal when clicking the dark overlay itself
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

// score fiel

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabContents.forEach((content) => content.classList.add("hidden"));

    tabButtons.forEach((b) => {
      b.classList.remove(
        "border",
        "border-b-0",
        "border-gray-300",
        "rounded-t-[0.3rem]",
        "text-black",
        "-mb-[1px]",
        "bg-white",
      );
      b.classList.add("text-blue-600");
    });

    document.getElementById(btn.dataset.target).classList.remove("hidden");

    btn.classList.remove("text-blue-600");
    btn.classList.add(
      "border",
      "border-b-0",
      "border-gray-300",
      "rounded-t-[0.3rem]",
      "text-black",
      "-mb-[1px]",
      "bg-white",
    );
  });
});
