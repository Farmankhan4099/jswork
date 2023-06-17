// Account
// 	name
// 	aadhar
// 	mobile
// 	address
// 	accountNo
// 	accountType
// 	pancard
// 	bank
// 	balance
// Account - Prototype
// 	withdraw
// 	deposit
// 	changePin
// 	printStatement
// 	calculateInterest
// calculateInterest object me b add krna hai. HDFC 8% SBI 7%  Parent 6%

// let account = function (
//   name,
//   aadhar,
//   mobile,
//   address,
//   accountNo,
//   accountType,
//   pancard,
//   bank,
//   balance
// ) {
//   this.name = name;
//   this.aadharNumber = aadhar;
//   this.mobileNumber = mobile;
//   this.yourAddress = address;
//   this.acNumber = accountNo;
//   this.typeAccount = accountType;
//   this.pancardNumber = pancard;
//   this.bankName = bank;
//   this.yourBalance = balance;

//   this.deposit = function (balance) {
//     console.log(`pinNumber ${pinNumber}`);
//     console.log(`currentBalance ${this.yourBalance}`);
//     return this.yourBalance + balance;
//   };

//   this.withdraw = function (balance) {
//     console.log(`withdraw Balance ${balance}`);
//     return depositMoney - balance;
//   };

//   this.changePin = function () {
//     let currentPin = 874099;
//     if (currentPin === pinNumber) {
//       let newPin = 12345;
//       let confirm = 12345;
//       if (newPin === confirm) {
//         pinNumber = 1234;
//         console.log(`changPinNumber ${pinNumber}`);
//       }
//     }
//   };
// };

// let sbi = new account(
//   "farman khan",
//   434368061506,
//   9116934980,
//   "jhotwara,jaipur",
//   06252221010243,
//   "saving",
//   844894,
//   "sbi",
//   0
// );

// let pinNumber = 874099;
// console.log(sbi);
// let depositMoney = sbi.deposit(10000);
// console.log(`depositBalance ${depositMoney}`);

// let withDrawMoney = sbi.withdraw(2000);
// console.log(`totalBalance ${withDrawMoney}`);

// sbi.changePin();

// class animal {
//   constructor(name, color, type, eye) {
//     this.animalName = name;
//     this.animalColor = color;
//     this.animalType = type;
//     this.animalEye = eye;
//   }
//   running() {
//     console.log("running");
//   }
//   sleep() {
//     console.log("sleep");
//   }
// }

// let lion = new animal("lion", "white", "wild", 2);
// let tiger = new animal("tiger", "white", "wild", 2);
// console.log(lion);
// console.log(tiger);
// lion.sleep();
// tiger.sleep();

// // 2nd assignment

// // class student {
// //   constructor(name, address, mobile, aadhar, pinCode) {
// //     this.name = name;
// //     this.address = address;
// //     this.mobile = mobile;
// //     this.aadhar = aadhar;
// //     this.pinCode = pinCode;
// //   }
// // }

// // let farman = new student(
// //   "farman khan",
// //   "jhotwara,jaipur",
// //   9116934980,
// //   434368061506,
// //   302012
// // );

// // console.log(farman);

// // class institute {
// //   constructor(name, address) {
// //     this.name = name;
// //     this.address = address;
// //     this.batches = new Map();
// //     this.fees = new Map();
// //     this.admission = function (batchName, student) {
// //       return this.batches.set(batchName, student);
// //     };

// //     this.feesDeposit = function (id, amount) {
// //       let ans = amount.reduce((pre, cur) => pre + cur);
// //       return this.fees.set(id, ans);
// //     };
// //   }
// // }

// // let academy = new institute("weCode", "jhotwara,jaipur");
// // console.log(academy);
// // console.log(academy.admission("javascript", [1, 2, 3, 4]));
// // console.log(academy.feesDeposit(1, [3000, 4000, 5000]));

class institute {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.batches = new Map();
    this.fees = new Map();
  }
  addmissin(batch, student) {
    if (this.batches.has(batch)) {
      const add = this.batches.get(batch);
      this.batches.set(batch, [...add, student]);
    } else {
      this.batches.set(batch, [student]);
    }
  }

  feeDeposit(id, ammount) {
    if (this.fees.has(id)) {
      let ans = this.fees.get(id);
      // ans.push(ammount);
      this.fees.set(id, [...ans, ammount]);
    } else {
      this.fees.set(id, [ammount]);
    }
  }
  totalFee(id) {
    let total = this.fees.get(id);
    let added = total.reduce((pre, total) => pre + total);
    let ab = new Map();
    ab.set(added, total);
    this.fees.set(id, ab);
  }

  printNumberOfStudentsInBatch(batchName) {
    let last = 0;
    let count = this.batches.get(batchName);
    let c = count[0];
    for (let a = 0; a < count.length; a++) {
      last++;
    }
    this.batches.set(batchName, last);
  }
}

let weCode = new institute("weCode academy", "jhotwara,jaipur");

class student {
  constructor(id, name, father, address, mobile) {
    this.id = id;
    this.name = name;
    this.father = father;
    this.address = address;
    this.mobile = mobile;
  }
}

let farman = new student(1, "farman", "Ayyub Khan", "jaipur", 9116934980);
let taiyab = new student(2, "taiyab", "husain", "jaipur", 9323322833);
let Ramesh = new student(3, "ramesh", "sunil", "jaipur", 9173283237);
let aakash = new student(3, "aakash", "hans", "jaipur", 9824732423);
weCode.addmissin("nodejs", farman);
weCode.addmissin("nodejs", taiyab);
weCode.addmissin("nodejs", Ramesh);
weCode.addmissin("nodejs", aakash);
weCode.feeDeposit(farman.id, 3000);
weCode.feeDeposit(farman.id, 5000);
weCode.feeDeposit(farman.id, 7000);
weCode.feeDeposit(taiyab.id, 5000);
weCode.feeDeposit(taiyab.id, 10000);
weCode.totalFee(farman.id);
weCode.totalFee(taiyab.id);
weCode.printNumberOfStudentsInBatch("nodejs");
console.log(weCode);

class animal {
  constructor(color, type) {
    this.color = color;
    this.type = type;
  }
}

class dog extends animal {
  constructor(name, color, type) {
    super(color, type);
    this.name = name;
  }
}

class Cat extends animal {
  constructor(name, color, type) {
    super(color, type);
    this.name = name;
  }
  eat() {
    return "vesetable";
  }
}

let animals = new animal("white", "pet");
console.log(animals);

let Dog = new dog("serru", "white", "pet");
console.log(Dog);

let cat = new Cat("semi", "white", "pet");
cat.eat();
console.log(cat);

class privates {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

let privasy = new privates("farman khan", "jhotwara, jaipur");
console.log(privasy);

// #########################################################################################

// ans-3   ek parent class Vegetable bnani hai fir uski child classes bnani hain 2
// aur unme fields and functions add krne hai. ye b khud se soche kya kya add kr skte hain aur
//inheritance kaise krte hain Javascript me vo kro

class vegetable {
  constructor(vegetableColor, type) {
    this.vegetableColor = vegetableColor;
    this.type = type;
  }
}

class spinach extends vegetable {
  constructor(vegetableColor, type) {
    super(vegetableColor, type);
  }
  rayta() {
    return "reyta";
  }

  palakPaneer() {
    return "palak paneer";
  }
}

class pea extends vegetable {
  constructor(vegetableColor, type) {
    super(vegetableColor, type);
  }
  peaPanner() {
    return "peaPaneer";
  }

  peaPotato() {
    return "peaPotato";
  }
}

let Vegetable = new vegetable("green", "native");
console.log(Vegetable);

let Spinach = new spinach("green", "native");
Spinach.rayta();
Spinach.palakPaneer();
console.log(Spinach);

let Pea = new pea("green", "native");
Pea.peaPanner();
Pea.peaPotato();
console.log(Pea);

// ans-1 -> myMap function : ye function jo b array ise denge use 10 se multiply kr dega each value ko
//-> myFilter function : ye function jo b array ise denge usme se even number ko filter kr dega
//-> mySum function : ye function jo b array ise denge uske sare numbers ko add kr dega

//Fir ek Array bnana hai aur us Array pr method chaining ke madad se
// myMap().myFilter().mySum() functions call krne hai isi order me

function myMap(arr) {
  for (let a = 0; a < arr.length; a++) {
    arr[a] = arr[a] * 10;
  }
  return arr;
}

function myFilter(arr) {
  let newArr = [];
  for (let a = 0; a < arr.length; a++) {
    if (arr[a] % 2 === 0) {
      newArr.push(arr[a]);
    }
  }
  return newArr;
}

function mySum(arr) {
  let sum = 0;
  for (let a = 0; a < arr.length; a++) {
    sum += arr[a];
  }
  return sum;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let ans = mySum(myFilter(myMap(arr)));
console.log(ans);

// ans 2 Ek Es6 syntax se ToDO class bnani hai

// ToDo class me getter, setters, static functions, private fields, protected fields hone chahiye

// ToDo class ka object jo b bnayega vo jo kaam krne hain unki list add kr skta hai.
// Kaunsa kaam done ho gya hai uska record b rkh skta hai.

class ToDO {
  constructor() {
    this.items = new Map();
  }

  get item() {
    return this.items;
  }

  set item(item) {
    this.items = item;
  }
  addItemList(listName, item) {
    if (this.items.has(listName)) {
      let add = this.items.get(listName);
      add.push(item);
      this.items.set(listName, add);
    } else {
      this.items.set(listName, [item]);
    }
  }

  removeItemList(list, item) {
    if (this.items.has(list)) {
      let ans = this.items.get(list);
      let index = ans.findIndex(function (value) {
        return value === item;
      });
      ans.splice(index, 1);
    }
  }
}

let toDo = new ToDO();

toDo.addItemList("jaipur", "city park");
toDo.addItemList("jaipur", "Aamer Fort");
toDo.addItemList("jaipur", "assembaly");
toDo.addItemList("agra", "TajMahal");
toDo.addItemList("agra", "red Fort");
toDo.removeItemList("agra", "TajMahal");
console.log(toDo);
