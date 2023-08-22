const getNumber = prompt("please enter a number!!");
let a;
let b;
let c;
for (a = 1; a < getNumber - 1; a++) {
    for (b = a; b < getNumber; b++) {
        c = Math.sqrt(a * a + b * b);
        if (c % 1 === 0) {
            if (c <= getNumber) {
                console.log(a, b, c);
            }
        }
    }
}
