let givenText = prompt("please enter your Text");
let givenRepeat = prompt("please enter number of repeat");

function repeatText(str , rep) {
    let result = "";
    for (let i = 1; i <= rep; i++) {
        result += str;
        
    }
    return result;
}
console.log(repeatText(givenText,givenRepeat));