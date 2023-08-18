const firstName = prompt("please enter your first name");
const lastName = prompt("Please enter your last name");
const fullName = firstName + " " + lastName;
const fullNameWithoutSpace = fullName.split(" ").join("");
console.log(fullName);
console.log(fullNameWithoutSpace.length);
