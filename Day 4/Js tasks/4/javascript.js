const getText = prompt("please enter some text!!");
let arryText = getText.split("");
let dupArrText = [];
for (let i = 0; i < arryText.length; i++) {
    const element = arryText[i].repeat(2);
    dupArrText.push(element);
}
let dupText = dupArrText.join("");
console.log(dupArrText);
console.log(dupText);
