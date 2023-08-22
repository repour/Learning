const getString = prompt("please enter some character seperated by comma!!");
let sepString = getString.split(",");
let resultString;
if (sepString.length <= 2) {
    resultString = null;
} else {
    resultString = sepString.slice(1, -1);
    resultString = resultString.join(" ");
}
console.log(resultString);
