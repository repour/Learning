const getName = prompt("please enter a text");

const splitedName = getName.split("");
const reverseArray = splitedName.reverse();
const reverseName = reverseArray.join("");
const revSplitName = reverseArray.join(",");
console.log(revSplitName);
console.log(reverseName);

