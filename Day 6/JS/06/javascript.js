let givenNumb = prompt("please enter your Number");

function phibonachi(numb) {
    let result = [];
    let checkNumb = false;
    let i = 0;
    let j = 1;
    let temp = 0;
    while (checkNumb != true) {
        if (j > numb) {
            result.pop();
            checkNumb = true;
        }else{
            temp = j;
            j += i;
            i = temp;
            result.push(j);
        }
    }
    return result;
}

console.log(phibonachi(givenNumb));
