let getStr = prompt("please enter your your cotent").split("");
let listOfCharacter = ["a" , "e" , "i" , "o" , "u"];

function removeVowel(arry , remove) {
    for (let j = 0; j < remove.length; j++) {
        arry = arry.filter((item) => item.toLowerCase() !== remove[j] );
    }
    console.log(arry.join(""));
}
removeVowel(getStr , listOfCharacter);

