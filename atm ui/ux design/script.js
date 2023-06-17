let enterPassword = prompt("please enter your password");
let actualPassword = "123";
let currentBalance = 0;
let statementArr = [];
function checkPassword(password) {
  if (enterPassword === actualPassword) {
    return true;
  } else {
    return false;
  }
}

function balance() {
  if (checkPassword()) {
    document.getElementById("atmMoney").innerText = currentBalance;
    console.log(statementArr);
  } else {
    alert("Sorry! your Wrong Password");
  }
}

function deposit() {
  if (checkPassword()) {
    let depositBalance = Number(prompt("please enter deposit money"));
    currentBalance = depositBalance + currentBalance;
    statementArr.push(depositBalance);
    document.getElementById("atmMoney").innerText = currentBalance;
  } else {
    alert("Sorry! your Wrong Password");
  }
}

function withdrawal() {
  if (checkPassword()) {
    let widthdraw = Number(prompt("please enter your withdraw money"));
    if (widthdraw <= currentBalance) {
      currentBalance -= widthdraw;
      statementArr.push(-widthdraw);
      document.getElementById("atmMoney").innerText = currentBalance;
    } else {
      alert("please add money");
    }
  } else {
    alert("Sorry! your Wrong Password");
  }
}

function changePassword() {
  if (checkPassword()) {
    let currentPassword = prompt("please enter confirm password");
    if (currentPassword === actualPassword) {
      let newPassword = prompt("please enter new password");
      let confirmPassword = prompt("please enter confirm password");
      if (newPassword == confirmPassword) {
        actualPassword = confirmPassword;
      } else {
        alert("sorry!confirm password is wrong");
      }
    }
  } else {
    alert("Sorry! current is  Wrong");
  }
}

function statement() {
  if (checkPassword()) {
    let str = "";
    for (let value of statementArr) {
      str =
        str +
        `${value < 0 ? "withdraw" : "deposit"}:${
          value < 0 ? value * -1 : value
        }\n`;
      document.getElementById("atmMoney").innerText = str;
    }
  } else {
    alert("Sorry! your Wrong Password");
  }
}
