// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners 
// Lesson 06 - Modules and require()
//---------
// count.js is a module for app.js
// counter var is assigned an anon function
var counter = function(array){
    return "\n+++++++++++++\n+++++++++++++\nThere definately are " + array.length + " elements in this demo array.\n+++++++++++++\n"
};

console.log(counter(['A', 'B', 'C']));

// The module.exports or exports is a special object which is included in every JS file in the Node.js application by default. Module is a var that represents current module and exports is an object that will be exposed as a module. So, whatever you assign to module.exports or exports, will be exposed as a module.
module.exports = counter;


