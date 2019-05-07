// console.log("Hello World");

var charSheet = {
    firstName : "Jake",
    lastName : "Smith",
    location : "Houston"
}

var key = "firstName";

console.log(charSheet[key]);

var keys = ["firstName", "lastName", "location"];

for(var i = 0; i < keys.length; i++) {
    var keyName = keys[i];
    console.log(charSheet[keyName]);
}