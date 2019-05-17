// Implement all of the following problems without using a while or a for loop 
// unless you were explicitly asked to use loops.

// Positive Numbers
// Write a function which takes an array of numbers as input and returns a new array 
// containing only the positive numbers in the given array.
function postiveNumbers(nums) {
   posNums = [];
   nums.forEach(element => {
      if(element >0) {
         posNums.push(element)
      }
   });
   console.log(posNums);
}

postiveNumbers([-3,2,621, -32, 100]);

// Even Numbers
// Write a function which takes an array of numbers as input and returns a new array 
// containing only the even numbers in the given array.
function evenNumbers(nums) {
   evenNums = [];
   nums.forEach(element => {
      if(element %2 === 0) {
         evenNums.push(element)
      }
   });
   console.log(evenNums);
}

evenNumbers([-4, -51, 0, 2, 5, 10, 21, 34]);

// Square the Numbers
// Write a function which takes an array of numbers as input and returns a new array 
// containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].
function squareNumbers(nums) {
   squareNums = [];
   nums.forEach(element => {
      squareNums.push(element*element)
   });
   console.log(squareNums);
}

squareNumbers([-4, -51, 0, 2, 5, 10, 21, 34]);
// Cities 1
// Write a function which takes an array of city objects like such:
var cities = [ 
{ name: 'Los Angeles', temperature: 60.0}, 
{ name: 'Atlanta', temperature: 52.0 }, 
{ name: 'Detroit', temperature: 48.0 }, 
{ name: 'New York', temperature: 80.0 } ];

// as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.
function coolCities(cities) {
   let coolTowns = cities.filter(function (element) {
      return element.temperature < 70.0 })
   return coolTowns}

console.log(coolCities(cities))

// Cities 2
// Write a function which takes an array of city objects like the above problem 
// as input and returns an array of the cities names.
function coolCityNames(cities) {
   let coolTownNames = cities.filter(function (element) {
      console.log(element.name)
      return element.name })
      }

coolCityNames(cities)

// Good Job!
// Given an array of people's names:

var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
// Print out 'Good Job, {{name}}!' for each person's name, one on a line.
function goodJob(persons) {
   goodJobPerson = []
   people.forEach(element => {
      goodJobPerson.push("Good job, " + element)})
   return goodJobPerson
}

console.log(goodJob(people))

// Sort an array
// Given an array of strings such the array of names given in the previous problem, sort them by alphabetically order.
function sortedArray(names) {
   return names.sort()
}

console.log(sortedArray(people))
// Sort an array, 2
// Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.
function sortedArray2(longNames) {

   longNames.sort(function(a,b){
      return Object.keys(b).length - Object.keys(a).length;
    });
    console.log(longNames);
}

sortedArray2(people)
// Sort an array, 3
// Given an array of array of numbers like:

var arr = [ 
[1, 3, 4], 
[2, 4, 6, 8], 
[3, 6] ];
// Sort the array by the sum of each inner array. For the above example, the respective sums for each inner array is 8, 20, and 9. Therefore, the solution should be:
 
// sortArray3(arr) // This returns the sums, but original array still needs to be sorted by these sums
function sum(arr) {
   return arr.reduce((x, y) => x + y);
}

function sortArr(arr) {
   return arr.sort((x, y) => sum(x) - sum(y));
}

console.log(sortArr(arr));
// 3 times
// Given this function:
function call3Times(fun) { fun(); fun(); fun(); }
// Use the call3Times function to print "Hello, world!" 3 times.
function fun() {
   console.log('Hello, world!');
}
call3Times(fun)
// n times
// You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. Example:
function callNTimes(times, fun) {
   if(times > 0) {
      return (fun + '\n').repeat(times)
   }
}
console.log(callNTimes(5, 'hello'))
// Hello, world! 
// Hello, world! 
// Hello, world! 
// Hello, world! 
// Hello, world!
// You are allowed to use a loop in the implementation of callNTimes.

// Sum an array
// Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. Use the reduce method to do this.
function sum(nums) {

   let sumArry = nums.reduce(function (element, b) { return element + b; }, 0);
      console.log(sumArry) }

sum([1, 2, 3]) 
// 6
// Acronym
// Write a function acronym that takes an array of words as argument and returns the acronym of the words. Use the reduce method to do this.
function acronym(words) {
   return words.reduce(function (acc, currentVal) {
      return acc + currentVal.slice(0,1)
   }, '')
}
console.log(acronym(['very', 'important', 'person']))
// > acronym(['very', 'important', 'person']) 
// 'VIP' > acronym(['national', 'aeronautics', 'space', 'administration']) 'NASA'
// Bonus: forEach
// Implement your own custom forEach function which takes two arguments: an array arr and a function fun. It will call fun passing each item in arr to fun as the first argument. Example:

// var arr = [ 
// { name: 'Bob' }, 
// { name:'Alice' }, 
// { name:'Joe' } ]; 
// forEach(arr, function(person) { 
//    console.log('Hello, ' + person.name + '!'); 
// });
// The above program will print:

// Hello, Bob! 
// Hello, Alice! 
// Hello, Joe!
// You can use a loop in the implementation of this function.

// Bonus: map
// Implement your own custom map function which takes two arguments: an array arr and a function fun. It will return a new array, with each of its results being the result of calling fun with each array element.

// Bonus: Caesar Cipher
// Rewrite this cipher function without using a loop, using the help of array's map, join, and string's split method.

// function cipher(text) 
// { var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''); var result = ''; 
// for (var i = 0; i < text.length; i++) { 
//    var chr = text[i]; 
//    var idx = alphabet.indexOf(chr.toUpperCase()); 
//    var newIdx = idx + 13; 
//    if (newIdx >= alphabet.length) { 
//      newIdx -= 26; 
//    } 
//    result += alphabet[newIdx]; 
//    } 
//    return result; 
// } // You can assume that the text is only one word, all letters are capitalized, and the offset is always 13 var encrypted = cipher('GENIUS');
// console.log(encrypted);