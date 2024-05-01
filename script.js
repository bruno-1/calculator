let display = "";

const btns = document.getElementsByTagName("button");
for (let btn of btns) {
  btn.addEventListener("click", (e) => {
    display += btn.textContent;
  if (btn.textContent === "CE") display = "";

    document.getElementById("display").textContent = display;
  });
}