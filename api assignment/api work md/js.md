function countrySearch() {
let countryInput = document.getElementById("countryDetail").value;
const httpRequest = new XMLHttpRequest();
httpRequest.open(
"GET",
`https://restcountries.com/v3.1/name/${countryInput}`
);
httpRequest.send();
httpRequest.onload = function () {
console.log(this.response);
let res = JSON.parse(this.response);
document.getElementById("capital").innerText = res[0].capital[0];
document.getElementById("population").innerText = res[0].population;
document.getElementById("languages").innerText = JSON.stringify(
res[0].languages
);
document.getElementById("independent").innerText = res[0].independent;

    let curr = res[0].currencies;
    let currenciesJson = JSON.stringify(curr);
    document.getElementById("currencies").innerText = currenciesJson;

    fnImage(countryInput);

};

document.getElementById("countryName").style.display = "block";
}

function fnImage(flag) {
document.getElementById("countryImg").src = `images/${flag}.png`;
}

let fetchs = fetch("https://restcountries.com/v3.1/name/india");
fetchs
.then((api) => {
return api.json();
})
.then((rejult) => {
console.log(rejult[0].capital[0]);
return fetch("https://restcountries.com/v3.1/name/japan");
})
.then((res) => {
return res.json();
})
.then((japan) => {
console.log(japan[0].capital[0]);
return japan[0].capital[0];
})
.then((capitals) => {
let capitalDetail = new Promise((success, reject) => {
if (capitals === "Tokyo") {
success();
} else {
reject();
}
});
return capitalDetail;
})

.then(() => {
console.log("success");
})
.catch(() => {
console.log("reject");
});

let promises = new Promise((success, reject) => {
setTimeout(() => {
if (10 > 8) {
success();
} else {
reject();
}
}, 1000);
});

promises
.then(() => {
let api = fetch("https://restcountries.com/v3.1/name/india");
return api;
})
.then((res) => {
res.json().then((capital) => {
console.log(capital[0].capital[0]);
});
})
.catch(() => {
console.log("hello javascript");
});
