let numbArry = [];
let getNumber = 0;
while (getNumber != "done") {
    getNumber = prompt("please enter your number and when finish it enter done.");
    numbArry.push(getNumber);
}
numbArry.pop();
let totalNumber = 0;
let temporaryNumb = 0;
for (let i = 0; i <= numbArry.length - 1; i++) {
    temporaryNumb = Number(numbArry[i])
    totalNumber += temporaryNumb;
}
console.log((totalNumber / numbArry.length).toFixed(2));