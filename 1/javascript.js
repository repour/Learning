const gettingNumber = prompt("please enter your number");
let printNumber = 0;
for (let i = 0; i <= gettingNumber; i += 2) {
    console.log(printNumber);
    printNumber += 2;
}