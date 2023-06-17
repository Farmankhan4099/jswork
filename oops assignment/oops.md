let account = function (
name,
aadhar,
mobile,
address,
accountNo,
accountType,
pancard,
bank,
balance
) {
this.name = name;
this.aadharNumber = aadhar;
this.mobileNumber = mobile;
this.yourAddress = address;
this.acNumber = accountNo;
this.typeAccount = accountType;
this.pancardNumber = pancard;
this.bankName = bank;
this.yourBalance = balance;

this.deposit = function (balance) {
console.log(`pinNumber ${pinNumber}`);
console.log(`currentBalance ${this.yourBalance}`);
return this.yourBalance + balance;
};

this.withdraw = function (balance) {
console.log(`withdraw Balance ${balance}`);
return depositMoney - balance;
};

this.changePin = function () {
let currentPin = 874099;
if (currentPin === pinNumber) {
let newPin = 12345;
let confirm = 12345;
if (newPin === confirm) {
pinNumber = 1234;
console.log(`changPinNumber ${pinNumber}`);
}
}
};
};

let sbi = new account(
"farman khan",
434368061506,
9116934980,
"jhotwara,jaipur",
06252221010243,
"saving",
844894,
"sbi",
0
);

let pinNumber = 874099;
console.log(sbi);
let depositMoney = sbi.deposit(10000);
console.log(`depositBalance ${depositMoney}`);

let withDrawMoney = sbi.withdraw(2000);
console.log(`totalBalance ${withDrawMoney}`);

sbi.changePin();
