/*    ///////////////////////////////////////      HW #1    ///////////////////////////////////////    */

console.log(2 + '2') //Prints 22
console.log(2 + 2 + '2') //Prints 42, b/c 2 + 2 is added & resulting 4 is added to string '2' (String Concatenation)
console.log(2 + true) //Will print 3 bool true is converted to int 1 when used in math
console.log(2 + true + '2') //Prints 32. 2 + true added to 3 and 3 concatenated to '2' to make 32
console.log(true + '2') //Prints true2, string concatenation
console.log(typeof(Number('Hello'))) //Prints "number"
console.log(Boolean(5)) //Prints true, for false it will print 0
console.log(Boolean('5')) //Prints true
console.log(Boolean('')) //Prints false
console.log(undefined) //Prints false
if(('' !== undefined) || ('' !== null) || ('' !== 0)) {
    //Will run
} 

let x = true
if (x) {
    //Will run
}
console.log(Boolean([])) //Arrays are objects and objects will always be true

/*    ///////////////////////////////////////      HW #2    ///////////////////////////////////////    */
const color = 'red'

switch(color) {
    case 'red':
        console.log("Epic Games")
        break;
    case 'blue':
        console.log('fortnite')
        break;
    default:
        console.log("Games Epic")    
        break;
}
switch(new Date().getDay()) {
    case 0:
        console.log('Sunday')
        break;
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
}

/*    ///////////////////////////////////////      HW #3    ///////////////////////////////////////    */
//Function Declaration
let firstName = prompt("Name?")
function greet(firstName = "John Doe") {
    console.log('hello')
    return "hello"
}
console.log(greet(firstName))

//function expression

const square = function(i = 77) {
    return i * i
}
console.log(square())
//Immediately invokable function expressions


epic = (function(name) {
    console.log(name)
})('Brad');

//Property Method

const todo = {
    add: function() {
        console.log("Add todo..")
    },
    edit: function(id){
        console.log(`Edit todo ${id}`)
    }
}

todo.delete = function() {
    console.log('Delete todo...')
}

todo.add()
todo.edit("Epic")

/*                                   HW #4                                  */
//Global
var a = 1
let b = 2
const c = 3
function test() {
	var a = 4
	let b = 5
	const c = 6
	console.log('function scope', a, b, c) 
}

test() //Prints 4,5,6
console.log('Global scope', a, b, c) //Prints 1,2,3

//Block Scope
if (true) {
	var a = 7 //Var will change globally
	let b = 8
	const c = 9
	//console.log(`If scope ${d,e,f}`)
	
}
console.log('Global scope', a, b, c) //Prints 7,2,3

for (let a = 0; a<10; a++) {
	console.log(`loop: ${a}`)
}
console.log('Global scope', a, b, c)

//                          HW #7                          //
//Wrong way
var pizza = ['Regular', 'Hawaiian']
var yes = pizza

yes[0] = 'Not Regular' //The pizza array has been changed because yes only references the pizza array

//Right Way
var right = [1,2,3]
yes = [...right]

yes[0] = 2 //right arr hasn't changed this time


//HW 8
const [bo,, bt] = [1,2,3] 
console.log(bo, bt)


let obj = {
	name: 'Adam',
	age: 17,
	address: {
		street: 'nope',
		city: 'yes'
	}
}

let obj2 = {
	age: 15
}

let obj3 = {...obj, ...obj2}
console.log(obj3)

function epicfunction({name, age, food = 'what?'}) {
	console.log(name, age, food)
}

epicfunction(obj)
 