const str = prompt("Please enter your string");

function countDuplicateCharacters(str) {
    // Create an empty map to store the character counts.
    let charCountMap = new Map();

    // Iterate over the string and update the character counts.
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();

        if (!charCountMap.has(char)) {
            charCountMap.set(char, 1);
        } else {
            charCountMap.set(char, charCountMap.get(char) + 1);
        }
    }

    // Count the number of characters with a count greater than 1.
    let duplicateCharacterCount = 0;
    for (let [char, count] of charCountMap.entries()) {
        if (count > 1) {
            duplicateCharacterCount++;
        }
    }

    return duplicateCharacterCount;
}

console.log(countDuplicateCharacters(str));