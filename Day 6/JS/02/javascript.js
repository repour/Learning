let givenNum = prompt("please enter your number list");
let arryFromStr = [];
for (let i = 0; i < givenNum.length; i++) {
    arryFromStr.push(Number(givenNum[i]));
}
function powAnyNumbInList(arry) {
    let resultArry = [];

    for (let i = 0; i < arry.length; i++) {
        arry[i] = arry[i] * arry[i];
        resultArry.push(arry[i])
    }
    return resultArry;
}

console.log(powAnyNumbInList(arryFromStr));
