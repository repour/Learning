const numbEnter = prompt("please enter your number and check console for highest possible number");
let arryFromNumber = Number(numbEnter.split("").sort((a,b) => b - a).join(""));
console.log(arryFromNumber);