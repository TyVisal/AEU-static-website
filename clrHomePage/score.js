//score file

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
