let givenStr = prompt("please enter your string");
givenStr = givenStr.toUpperCase();
let arryFromStr = [];
for (let i = 0; i < givenStr.length; i++) {
    arryFromStr.push(givenStr[i]);
}

function sumOfStrBasedOnList(arry) {
    let sumOfStr = 0;
    let pointOne = ["A" , "E" , "I" , "O" , "U" ,"L" ,"N" ,"R" ,"S" ,"T"];
    let pointTwo = ["D" , "G"];
    let pointThree = ["B" ,"C" , "M" ,"P"];
    let pointFour = ["F" ,"H" , "V" ,"W" , "Y"];
    let pointFive = ["K"];
    let pointEight = ["J" , "X"];
    let pointTen = ["Q" ,"Z"];

    for (let i = 0; i < arryFromStr.length; i++) {
        if (pointOne.includes(arryFromStr[i])) {
            sumOfStr = sumOfStr + 1;
        } else if (pointTwo.includes(arryFromStr[i])) {
            sumOfStr = sumOfStr + 2;
        } else if (pointThree.includes(arryFromStr[i])) {
            sumOfStr = sumOfStr + 3;
        } else if (pointFour.includes(arryFromStr[i])) {
            sumOfStr = sumOfStr + 4;
        } else if (pointFive.includes(arryFromStr[i])) {
            sumOfStr = sumOfStr + 5;
        } else if (pointEight.includes(arryFromStr[i])) {
            sumOfStr = sumOfStr + 8;
        } else if (pointTen.includes(arryFromStr[i])) {
            sumOfStr = sumOfStr + 10;
        };
    }
    return sumOfStr;
}

console.log(sumOfStrBasedOnList(arryFromStr));
