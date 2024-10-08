let bgMode = document.querySelector("#bg-mode");
let body = document.querySelector("body");
let profiles = document.querySelectorAll("i");

let flag = 1;
bgMode.addEventListener("click", () => {
  if (flag == 1) {
    body.style.backgroundColor = "#31333C";
    body.style.color = "#fff";
    profiles.forEach((e) => {
      e.style.color = "#fff";
    });
    flag = 0;
  } else {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
    profiles.forEach((e) => {
      e.style.color = "#000";
    });
    flag = 1;
  }
});
