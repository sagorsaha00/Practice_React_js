let number = 0 ;

let button = document.querySelector("#button");
let display = document.querySelector("#display");


button.addEventListener("click",() => {
  number++;
  display.textContent = number;
  console.log(number)
});