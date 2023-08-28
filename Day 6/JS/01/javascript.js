let givenStr = prompt("please enter your string");
givenStr = givenStr.toUpperCase();
let arryFromStr = [];
for (let i = 0; i < givenStr.length; i++) {
    arryFromStr.push(givenStr[i]);
}
function sumOfStrBasedOnList(arry) {
    let sumOfStr = 0;
    let listOfCharacter = ["A" , "E" , "I" , "O" , "U"];
    for (let i = 0; i < arry.length; i++) {
        if (listOfCharacter.includes(arry[i])) {
            sumOfStr = sumOfStr + 1;
    }
    }
    return sumOfStr;

}

console.log(sumOfStrBasedOnList(arryFromStr));
