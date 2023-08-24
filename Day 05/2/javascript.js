let numbArry = [];
let getNumber = 0;
while (getNumber != "done") {
    getNumber = prompt("please enter your number and when finish it enter done.");
    numbArry.push(Number(getNumber));
}
numbArry.pop();

for (let i = 0; i < numbArry.length - 1; i++) {

    let minIndex = i;
    for (let j = i + 1; j < numbArry.length; j++) {
        if (numbArry[j] < numbArry[minIndex]) minIndex = j;
    }

    let temp = numbArry[minIndex];
    numbArry[minIndex] = numbArry[i];
    numbArry[i] = temp;
}
console.log(numbArry);
console.log(numbArry[0] + numbArry[1]);
