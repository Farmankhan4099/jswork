let arr = [1, 2, 3, 4, 5, 6, 7];
let [, , a, , , , b] = arr;
console.log(a, b);

let arr1 = [1, 2, 3, [4, 5], 6, 7];
let [, c, , [, f], , d] = arr1;
console.log(c, f, d);

let arr2 = [1];
let [, e = 10] = arr2;
console.log(e);

function num() {
  return [10, 20];
}

console.log(num());

let obj = {
  name: "Farman khan",
  Father: "Ayyub Khan",
  Mobile: 9116934980,
  city: "Hindaun City",
};

let { name, Father } = obj;
console.log(name, Father);

let obj1 = {
  address: "jhotwara",
  city: "jaipur",
  myDetails: {
    coachingName: "wecode Academy",
    Sir: "sajid",
    Address: "jaipur city",
  },
};

let {
  address,
  myDetails: { Sir },
  myDetails: { Address },
} = obj1;
console.log(address, Sir, Address);

let arre = [1, 2, 3, [4, 7], 5, 6];
let arre1 = [...arre];
arre1.push(10);
arre.push(29);
console.log(arre, arre1);

let obj2 = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
};

let obj3 = { ...obj2 };
obj2.three = "three";
obj3.four = "four";

console.log(obj2, obj3);

let obj4 = {
  five: 5,
  six: 6,
  seven: {
    eight: 8,
    nine: 9,
  },
};

let obj5 = { ...obj4 };
obj4.six = "six";
obj5.seven.nine = "nine";

console.log(obj4, obj5);
let objFn1 = {
  name: "farman khan",
  address: "jaipur",
  pinCode: 302012,
};

function objFn({ name, pinCode }) {
  console.log(name, pinCode);
}

objFn(objFn1);
