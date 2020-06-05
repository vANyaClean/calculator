const display = document.querySelector(".display");
document
  .querySelectorAll(".digits button")
  .forEach((button) => button.addEventListener("click", digitsPressed));
function digitsPressed(ev) {
  display.value += ev.target.innerText;
}

document
  .querySelectorAll(".opers button")
  .forEach((button) => button.addEventListener("click", opersPressed));
function opersPressed(ev) {
  display.value += ev.target.innerText;
}
document.querySelector(".eq").addEventListener("click", equals);
function equals() {
  if (display.value.match("/0")) {
    alert("You can not do this");
  } else {
    display.value = eval(display.value).toFixed(2);
    }
}
document.querySelector(".erase").addEventListener("click", erase);
function erase() {
  display.value = "";
}
document.querySelector(".eraselast").addEventListener("click", eraselast);
function eraselast() {
  display.value = display.value.slice(0, -1);
}
