// data types

const name = 'Sajana'; //string
const age = 10; //number
console.log(`My name is ${name} I am ${age} years old`);
const x = 4.5; //decimal number
const isBool = true; //boolean
const y = undefined; // undefined
let z; //undefined

// arrays

const arr = new Array(1,2,3,4,5);
const arr1 = [1,2,3,4,5];
arr1[6] = 6;
arr.push(6); // add to the end
arr.unshift(0); // add to the front
arr.pop(); //remove the last one

// classes
const Person = {
    firstname: 'Sajana',
    lastname: 'Kavinda',
    age: 30,
    hobbies: ['music', 'movies'],
    address: {
        city: 'Kandy',
        town: 'Pilimatalawa'
    }
}
console.log(Person);
console.log(Person.firstname);
console.log(Person.address.city);

const {firstname, lastname, address: {city}} = Person; //pulling out
console.log(firstname);
console.log(city);

Person.email = 'abcd@gmail'; // adding objects

//arrays with objects
const todo = [
    {
        id: 1,
        text: 'takeout',
        istrue = true,
    },
    {
        id: 2,
        text: 'takein',
        istrue = false,
    },
    {
        id: 3,
        text: 'takeout1',
        istrue = true,
    }
];
console.log(todo[1].text); //prints 'takein'

const todoJSON = JSON.stringify(todo); // convert into JSON | send data to a server
console.log(todoJSON);

//loops

for (let i =0; i < 10; i++){
    console.log(i);
}

let i = 0;
while (i < 10){
    console.log(i);
    i++;
} 

for (let i =0; i<todo.length; i++){
    console.log(todo[i].text);
}

for (let toloop of todo){ // more readable and less complicated syntax
    console.log(toloop.text);
    console.log(toloop.id);
}

//forEach, map, filter

todo.forEach(function(todoitem){ //todoitem is the parameter for the function
    console.log(todoitem.text);
});

const todoText = todo.map(function(todoitem){ //todoitem is the parameter for the function
    return todoitem.text; 
});
console.log(todoText);

const todoTrue = todo.filter(function(todoitem){ //todoitem is the parameter for the function
    return todoitem.istrue === true; // return the values of objects where the istrue condition = true
}).map(function(todoitem){
    return todoitem.text; //Only returns the text object where the istrue condtion = true
});
console.log(todoTrue);

// Conditions

const x = 10;
const y = 20;

if (x === 10 && y === 20){ // '==' check the match with the value not the data type '===' check the data type too
    console.log(x);
}
else if (x === 20 || y === 20){

}
else {

}
//default date
var d = new Date();
//d stores the current date and time

// functions
function name() {    
    //code to be executed
  }
  function myFunc(x, y) {
    // some code
 }
// function with time bulit in functions
 function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000); //set interval time to execute the funtion

// finding elements from document method

//finds element by id
document.getElementById(id) 

//finds elements by class name
document.getElementsByClassName(name) 

//finds elements by tag name
document.getElementsByTagName(name)
