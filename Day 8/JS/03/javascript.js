const getArry1 = prompt("please enter your first array , and seperate items with comma").split(",");
console.log("first array", getArry1);
const getArry2 = prompt("please enter your second array , and seperate items with comma").split(",");
console.log("Second array", getArry2);

function uniqueItemInArry(arry1, arry2) {
    //////////// in this section we can find items in first arry///////////////
    let firstResult = [...arry1];
    for (let j = 0; j < arry2.length; j++) {
        firstResult = firstResult.filter((item) => item !== arry2[j]);
    }
    //////////// in this section we can find items in first arry///////////////
    let secondResult = [...arry2];
    for (let j = 0; j < arry1.length; j++) {
        secondResult = secondResult.filter((item) => item !== arry1[j]);
    }

    const finalResult = [...firstResult, ...secondResult];
    console.log("Result", finalResult);
}

uniqueItemInArry(getArry1 , getArry2);
