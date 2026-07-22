// const input = document.getElementById("search");
// const rows = document.querySelectorAll("table tbody tr");

// input.addEventListener("input", function () {
//   const term = this.value.toLowerCase();
//   rows.forEach((row) => {
//     row.style.display = row.textContent.toLowerCase().includes(term)
//       ? ""
//       : "none";
//   });
// });

const input = document.getElementById("search");
const logRows = document.querySelectorAll(".log-row");

input.addEventListener("input", function () {
  const term = this.value.toLowerCase();

  logRows.forEach((row) => {
    const detailRow = row.nextElementSibling;
    const combinedText = (
      row.textContent +
      " " +
      detailRow.textContent
    ).toLowerCase();
    const matches = combinedText.includes(term);

    row.style.display = matches ? "" : "none";

    if (!matches) {
      detailRow.style.display = "none";
    } else {
      // let the toggle's "hidden" class control visibility again
      detailRow.style.display = "";
      detailRow.classList.add("hidden");
    }
  });
});
