const getNumber = prompt("please enter a number!!");
if (getNumber > 2) {
    let i;
    let listOfRemainder = [];
    for (let i = 2; i < getNumber; i++) {
        listOfRemainder.push(getNumber % i);
    }
    if (listOfRemainder.includes(0)) {
        alert("Sorry, Your number is not prime number");
    } else {
        alert("Congrats, Your number is prime number");
    }
} else if (getNumber == 2) {
    alert("Congrats, Your number is prime number");
} else {
    alert("Ooopppss, One is very complicated but it's not prime!")
}