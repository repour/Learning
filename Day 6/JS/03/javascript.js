let continueOrNot = false;
let arryFromStr = [];
let givenStr;
while (!continueOrNot) {
    givenStr = prompt("please enter your Number ,  and when it's finished enter 'quit'");
    if (givenStr == "quit") {
        continueOrNot = true;
    } else {
        arryFromStr.push(Number(givenStr));
    }
}

function sumOfPositiveNumb(arry) {
    let sumResult = 0;
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] >= 0) {
            sumResult += arry[i];
        } 
    }
    return sumResult;
}

console.log(sumOfPositiveNumb(arryFromStr));
