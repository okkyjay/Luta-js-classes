console.log("Hello World!")
const name = "Innocent";
console.log(name)

// below set statements finds the average of two numbers

/* 




*/
let firstNumber = 20
let secondNumeber = 10

let sumOfTheNumbers = firstNumber + secondNumeber
let average  = sumOfTheNumbers/2

console.log(average)
//

let x;
x = 5

let y = 6

// this wrong syntax let z = x + yzc




/*


Arithmetic Operators
Assignment Operators
Comparison Operators
==
String Operators
Logical Operators
Bitwise Operators
Ternary Operators
Type Operators

*/

 x = '5'
 y = 5

 /*
if(x === y){

}
*/

let myname = "This is a javascript string example"

let xy = 'Dammy'
let yx = 'Innocent'

// And (&&)
// OR (||)

if (xy == 'Dammy' || yx == 'Innocent')
{
    // statement or instructions
    // code block
}



// DataType

/**
 * JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

 */


let ch = "String"
let no = 10e2
let bigN = BigInt("129292928282727272626762626262726276627276")

let Subject;
console.log( typeof Subject)

let amount = 0

const Person = {
    name: 'Dammy',
    height: "6inc",
    gender: 'Male'
}
console.log('Dammy gender is ....' + Person.gender)

// {} [] ()

// collection of cars
let car1 = "Benz"
let car2 = "Toyota"

const cars = ["Benz", "Toyota", "BMW", "Nissan"]
 
//console.log(cars[0])
let arrayLength = cars.length
//console.log(cars[(cars.length - 2)])


let aWord = "level"

// Control structures
// if
// if else
// if else if
// switch
// loop         for, for in, while


/**
 *  if (condition){
 * 
 * statements....
 *
 * }
 */
let hour = 10
if(hour == 10){
    //console.log('Good Morning')
}
hour = 10
if(hour < 12){
    //console.log('Good Morning')
}


if(hour < 12){
    //console.log('Top of the morning to you all')
}else{
    //console.log('Good Day')
}


if(hour <= 10){
   // console.log('Good Morning')
} else if(hour > 10 && hour < 12){
    //console.log('Good Day')
} else if (hour >= 12 && hour < 17){
    //console.log("good afternoon")
}else{
    //console.log('Good evening')
}



// Switch Statement
/**
 *  switch (expression){
 *  case 1:
 *       // code block
 *  break;
 * case 2:
 *      // Code block
 * break;
 * default:
 *        // code block
 * }
 */

const dayOfTheWeek = new Date().getDay()
//console.log(dayOfTheWeek)

switch(dayOfTheWeek){
    case 0:
       // console.log("Sunday")
    break;
    case 1:
       // console.log("Monday")
    break;
    case 2:
       // console.log("Wednessday")
    break;
    default:
        //console.log("Happy WeekDays")
}


/**
 * for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
 */

for(let i = 1; i <=10; i++){
    //console.log(i)
}

cars.reverse()
for(let i = 0; i < cars.length; i++){
    //console.log(cars[i])
}

// Functions
function nameOfTheFunction (parameter1, data){
    // Statements
    //return []
}

function sumOfNumbers (firstNumber, secondNumeber){
    let sum = firstNumber + secondNumeber;
    return sum;
}

let callAFunction = sumOfNumbers(5, 10)
//console.log('Sum of two numbers = ' + callAFunction)


function getDayOfWeek(){
    const date = new Date()
    let a1 = date.getDay()
    const dayOfTheWeek = [
        'Sunday', 
        'Monday',
        'Tuesday', 
        'Wednessday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    return dayOfTheWeek[a1]
}
//console.log(getDayOfWeek())

function checkPla (str){
    /*str = str.toLowerCase()
    let arrayOfString = str.split('')
    let reverseOfArray = arrayOfString.reverse()
    let joinArray = reverseOfArray.join('')
    return str === joinArray
    */
   return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
}
let check = checkPla('madam')
if(check){
   // console.log('It is a Palindrone')
}else{
    //console.log('It is not a Palindrone')
}
// ES5
const palCheck = function (str){

}
// ES6
const palindroneCheck = (str) => {
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
}
//console.log(palindroneCheck('Hello'))

// DOM
