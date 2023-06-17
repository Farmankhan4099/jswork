// login

function login() {
  window.open("signUP.html", "_blank");
  let username = document.getElementById("UserName2").value;
  localStorage.setItem("username", username);

  let passWords = document.getElementById("passwords").value;
  localStorage.setItem("passwords", passWords);
}

function backs() {
  let MatchUserName = localStorage.getItem("username");
  let MatchPassword = localStorage.getItem("passwords");
  let loginUser = document.getElementById("UserName1").value;
  let loginPassword = document.getElementById("passwords1").value;
  if (MatchPassword === loginPassword && MatchUserName === loginUser) {
    window.close();
  } else if (MatchPassword !== loginPassword && MatchUserName !== loginUser) {
    alert("plaese enter valid name and passwords");
  } else if (MatchUserName !== loginUser) {
    alert("please enter a valid name");
  } else if (MatchPassword !== loginPassword) {
    alert("please enter a valid password");
  }
}

// sign up

function signUp() {
  window.open("balance.html", "_blank");
}

function submitBtn() {
  let names = document.getElementById("names").value;
  localStorage.setItem("name", names);
  let mobile = document.getElementById("mobile").value;
  localStorage.setItem("mobile", mobile);
  let aadhar = document.getElementById("aadhar").value;
  localStorage.setItem("aadhar", aadhar);
  let email = document.getElementById("aadhar").value;
  localStorage.setItem("email", email);
  let password = document.getElementById("password").value;
  localStorage.setItem("BankPassword", password);
}
