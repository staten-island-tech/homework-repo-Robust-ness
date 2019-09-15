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

/*    ///////////////////////////////////////      HW #2    ///////////////////////////////////////    */
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