// Create function "sum" that will sum all arguments passed to it
// Quantity of arguments is unknown

// let sum = (...args) => args.reduce((acc, elem) => acc + elem, 0);
// console.log(sum(5,6,7));

// ///////////////////////////////////////////////////////
// var a = 5;
// var b = 10;

// if(b>a){
//     c = a+b+c;
//     var c = 2;
//     console.log(c);
// }

// console.log(c);

/////////////////////////////////////////////////

function mult(a, b) {
    return a * b;
}
console.log(mult(4, 5));
let mult2 = (a, b) => a * b;
console.log(mult2(4, 6));


/////////////////////////////////////////////////

let obj = {
    x: 5,
    y: 20,
    z: 3
}

let mult3 = (o) => {
    let { x, y, z } = o;

    return x * y * z;
};

console.log(mult3(obj));

/////////////////////////////////////////////////
let a, b, c, d, arr;

a = [1, 2]
b = [4, 5]
c = [8, 9, 10]
d = 11

////[0,1,2,3,4,5,6,7,8,9,10,11]

arr = [0, ...a, 3, ...b, 6, 7, ...c, d]

console.log(arr);

/////////////////////////////////////////////////

//Iterate over a string

let vowelCount = 0;

let vowels = ['a','e','i','o','u'];

let str = "Today is a sleepy day";

// // ES5 version/solution
// for (let i = 0; i < str.length;i++) {
//     if (vowels.includes(str[i])){
//         vowelCount++;
//     }
// }
// console.log(vowelCount);

// ES6 version/solution
for (let s of str) {
    if(vowels.includes(s)){
        vowelCount++
    }
}

console.log(vowelCount);
