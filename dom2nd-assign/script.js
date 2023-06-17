function fun() {
  let ac = document.getElementById("First").value;
  document.getElementById("First").value = ac.toUpperCase();
}

function fn1() {
  let name = document.getElementById("First").value;
  let Dob = document.getElementById("Dob").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  if (!name) {
    alert("please enter name");
  }
  if (!Dob) {
    alert("please enter Dob");
  }

  if (!email) {
    alert("please enter Email");
  }
  if (!mobile) {
    alert("please enter mobile number");
  }
}

// list

let input = document.getElementById("input-id");
let ul = document.getElementById("ul");

function fn2() {
  let li = document.createElement("li");
  li.innerText = input.value;
  ul.appendChild(li).value = "";
}

// calculater

let calculater = document.getElementById("input");

function plus(value) {
  calculater.value += value;
}

function calculate() {
  let evel = eval(document.getElementById("input").value);
  document.getElementById("input").value = evel;
}

function clears() {
  document.getElementById("input").value = "";
}
