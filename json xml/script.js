let obj = {
  name: "WEcode",
  age: 32,
  address: {
    pincode: 302012,
    city: "Jaipur",
    state: "Rajasthan",
  },
};
console.log(obj);
//Object to JSON String

console.log(JSON.stringify(obj));

let str =
  '{"name":"WEcode","age":32,"address":{"pincode":302012,"city":"Jaipur","state":"Rajasthan"},"names":["Sajid","Vajid"]}';
console.log(str);

//JSON to Object
console.log(JSON.parse(str));

let obj1 = {
  name: "WEcode",
  age: 32,
  address: {
    pincode: 302012,
    city: "Jaipur",
    state: "Rajasthan",
  },
};

console.log(obj1);
console.log(JSON.stringify(obj1));

let str1 = `{
  "name":"farman",
  "Father":"Ayyub",
  "address":"jhotwara",
  "age":21
}
`;

console.log(JSON.parse(str1));
