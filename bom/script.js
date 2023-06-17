console.log(this);
// window.alert("hello javascript");

// screen width
console.log(screen.height);
let width = screen.width;
console.log(width);
if (width >= 0 && width <= 767) {
  document.getElementById("h1").style.color = "red";
} else if (width >= 768 && width <= 991) {
  document.getElementById("h1").style.color = "yellow";
} else if (width >= 992 && width <= 1199) {
  document.getElementById("h1").style.color = "green";
} else {
  document.getElementById("h1").style.color = "blue";
}

// window

// window.open
function fn() {
  let timing = setTimeout(function () {
    let an = window.open(
      "https://github.com/sajidhamdard/learnjavascript/blob/main/Syllabus/Syllabus.md",
      "_self"
    );
  }, 2000);
}

// window.close

function fn1() {
  let an = window.open(
    "https://github.com/sajidhamdard/learnjavascript/blob/main/Syllabus/Syllabus.md",
    "_blank"
  );

  setTimeout(function () {
    an.close();
  }, 5000);
}

// this code error
function fn2() {
  setInterval(function () {
    let closed1 = window.open(
      "https://github.com/sajidhamdard/learnjavascript/blob/main/Syllabus/Syllabus.md",
      "_blank"
    );
  }, 2000);

  setTimeout(function () {
    closed1.close();
  }, 7000);
}

// location

console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.pathname);
console.log(window.location.protocol);
console.log(window.location.assign);
