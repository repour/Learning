const gettingNumber = prompt("please enter your number");
let printNumber = [];
for  (i = 0; i <= gettingNumber; i += 2) {
    printNumber.push(i)
}
console.log(printNumber.length);
