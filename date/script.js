console.log(new Date());

// 2nd way

console.log(new Date("4/10/2023"));
console.log(new Date("4-10-2023"));
console.log(new Date("2023/10/4"));
console.log(new Date("4/10/2023 12:42:6"));

//  3rd way

console.log(new Date(2023, 10));
console.log(new Date(2023, 2, 10));
console.log(new Date(2023, 2, 10, 10, 20, 49));

// 4th way

console.log(new Date(365 * 24 * 60 * 60 * 1000));
console.log(new Date(31536000000));

let d = new Date();
console.log(d.getTime()); // Date to Time in Miliseconds
console.log(d.getDate()); //10
console.log(d.getDay()); // 1 Monday
console.log(d.getFullYear()); //2023
console.log(d.getHours()); // 6
console.log(d.getMilliseconds());
console.log(d.getSeconds());
console.log(d.getMinutes());

console.log(d.setDate(29));
console.log(new Date(1682762103274));

setInterval(function () {
  let d = new Date();
  // console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
  document.getElementById(
    "time"
  ).innerText = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}, 1000);

console.log(
  new Intl.DateTimeFormat("en-AU", {
    dateStyle: "short",
    timeStyle: "long",
    timeZone: "Australia/Sydney",
  }).format(new Date())
);

console.log(new Intl.DateTimeFormat("en-AU", {}).format(new Date()));

console.log(
  new Intl.NumberFormat("de-DE", { style: "unit", unit: "liter" }).format(70.2)
);

let date = new Date();
console.log(
  `Hour ${date.getHours()} : minutes ${date.getMinutes()} : second ${date.getSeconds()}`
);

// fast timer

// for (let a = 0; a <= 1; a++) {
//   let ans = setInterval(function () {
//     document.getElementById("watch").innerHTML = a;
//     a++;
//   }, 50);

//   setTimeout(function () {
//     clearTimeout(ans);
//   }, 20000);
// }

let a = 1;
let timer = setInterval(function () {
  document.getElementById("watch").innerHTML = a;
  a++;
}, 50);

setTimeout(function () {
  clearTimeout(timer);
}, 20000);
