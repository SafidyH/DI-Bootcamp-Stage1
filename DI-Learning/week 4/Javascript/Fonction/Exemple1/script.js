let eyeColor = "blue";

function userMoreInfo (userName, userAge) {
    console.log("My name is " + userName + ", my age is " + userAge + ", I have " + eyeColor + " eyes");
}

userMoreInfo("Safidy", 22); //My name is Sarah, my age is 22, I have blue eyes
console.log(eyeColor); // blue

function userInfo(userName, userAge) {
    if (userName !== "Sarah") {
        return;
    } 
    alert("You are not the right person");
}

let girlInfo = userInfo("Sarah", 22);
console.log(girlInfo); //undefined