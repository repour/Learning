import "./style.css"

const inputEl = document.querySelector(".top-sec input");
const enterBtnEl = document.querySelector(".top-sec button");
const printBtnEl = document.querySelector(".print");
const clearBtnEl = document.querySelector(".clear");
const listNames = document.querySelector(".list-names");
let listOfNameArr = [];
function pushNameInArr() {
    listOfNameArr.push(inputEl.value);
    inputEl.value = "";
}
function printNames() {
    listNames.innerHTML = `${listOfNameArr.join(" and ")} like JS`;
}
function clearNames() {
    listNames.innerText = "";
}

enterBtnEl.addEventListener("click",pushNameInArr);
printBtnEl.addEventListener("click",printNames);
clearBtnEl.addEventListener("click",clearNames);