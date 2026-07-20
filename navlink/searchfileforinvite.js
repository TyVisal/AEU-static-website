const input = document.getElementById("search");
const rows = document.querySelectorAll("table tbody tr");

input.addEventListener("input", function () {
  const term = this.value.toLowerCase();
  rows.forEach((row) => {
    row.style.display = row.textContent.toLowerCase().includes(term)
      ? ""
      : "none";
  });
});
