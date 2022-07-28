var retrievedObject = JSON.parse(localStorage.getItem("userInfo"));
var nameId = document.querySelector("#name-ul");
console.log(retrievedObject);
var nameEL = document.createElement("li");
nameEL.classList.add("name-li");
nameEL.textContent = retrievedObject.userNameObject;
nameId.append(nameEL);

var highId = document.querySelector("#high-ul");
var highEl = document.createElement("li");
highEl.classList.add("high-li");
highEl.textContent = "scored " + retrievedObject.scoreObject + "/5, with a time of " + retrievedObject.timerCountObject + "s";
highId.append(highEl);