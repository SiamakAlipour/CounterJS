let count = 0;

let buttons = document.querySelectorAll(".btn");
let value = document.querySelector(".number");

buttons.forEach((btn) => {
  const style = btn.addEventListener("click", (e) => {
    const style = e.currentTarget.classList;
    if (style.contains("Decrease")) {
      count--;
    } else if (style.contains("Increase")) {
      count++;
    } else if (style.contains("Reset")) {
      count = 0;
    }
    value.textContent = count;
  });
});
