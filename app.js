// Lesson_06
// app.js is this app's entry file
// req the count module file count.js
var counter = require("./count");
// console.log will output the str sentence in the counter function in the count.js module
// console.log is "invoking" the counter function in the count module AND sending it an array as an arg to use
console.log( counter([ "John", "Paul", "George", "Ringo", "Earth", "Wind", "Fire", "John", "Paul", "George", "Ringo", "Earth", "Wind", "Fire", "John", "Paul", "George", "Ringo", "Earth", "Wind", "Fire", "John", "Paul", "George", "Ringo", "Earth", "Wind", "Fire", "John", "Paul", "George", "Ringo", "Earth", "Wind", "Fire", "John", "Paul", "George", "Ringo", "Earth", "Wind", "Fire", "John", "Paul", "George", "Ringo", "Earth", "Wind", "Fire", "John", "Paul", "George", "Ringo", "Earth", "Wind", "Fire", "John", "Paul", "George", "Ringo", "Earth", "Wind", "Fire", "John", "Paul", "George", "Ringo", "Earth", "Wind", "Fire"])  );


