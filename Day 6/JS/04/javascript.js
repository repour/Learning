let givenStr = prompt("please enter your string");
givenStr = givenStr.toUpperCase();
let arryFromStr = [];
for (let i = 0; i < givenStr.length; i++) {
    arryFromStr.push(givenStr[i]);
}

function isIsogram(arry) {
    let result = true;
    for (let i = 0; i < arry.length; i++) {
        for (let j = i + 1; j < arry.length; j++) {
            if (arry[i] == arry[j]) {
                result = false;
                return result;
            }
        }
        
    }
    
    return result;
}
console.log(isIsogram(arryFromStr));