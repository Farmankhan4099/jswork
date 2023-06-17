function fn1(songType) {
  document.getElementById("songSource").src = songType;
  document.getElementById("song").load();
  document.getElementById("song").play();
}

let num = Math.trunc(Math.random() * 10 + 1);
console.log(num);

function fn2() {
  let ans = Number(document.getElementById("inp").value);

  if (num === ans) {
    alert("congratulations");
  } else if (num > ans) {
    alert("to big number");
  } else {
    alert("to small number");
  }
}

const familyMap = new Map();
familyMap.set("rehan", {
  name: "Rehan",
  age: 21,
  mobile: 945454545,
  address: "Jaipur",
  relation: "Brother",
  image: "",
});

familyMap.set("sajid", {
  name: "Sajid",
  age: 21,
  mobile: 7876876665,
  address: "Jaipur",
  relation: "Cousing",
  image: "sajid.png",
});

familyMap.set("arun", {
  name: "Arun",
  age: 43,
  mobile: 5675676767657,
  address: "Nagaur",
  relation: "Father",
  image: "arun.png",
});
function showDetails(key) {
  const obj = familyMap.get(key);
  document.getElementById("family").src = obj.image;
  document.getElementById("intro").innerText = obj.name;
  document.getElementById("age").innerText = obj.age;
  document.getElementById("mobile").innerText = obj.mobile;
  document.getElementById("address").innerText = obj.address;
  document.getElementById("relation").innerText = obj.relation;
}

let map1 = new Map();
map1.set("farman", {
  age: 21,
  address: "jhotwara",
  city: "jaipur",
});

function fns(key) {
  let obj1 = map1.get(key);
  console.log(obj1);
  document.getElementById("details").innerText = obj1.city;
}

function fns1() {
  let name = document.getElementById("name").value;
  let age = Number(document.getElementById("ages").value);
  if (!name) {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerText = "enter your name";
    document.getElementById("error").style.color = "red";
  }
  if (!age) {
  } else if (age < 10) {
    alert("age less than and aquel 10");
  } else if (age > 20) {
    alert("age is greter then 20");
  }
}
