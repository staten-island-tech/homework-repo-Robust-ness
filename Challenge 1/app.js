// Q1.READ ALL THE INSTRUCTIONS CAREFULLY

// map to an array of seconds, 
/* .map(timeCode => {
    const parts = timeCode.split(':').ENTER SOME CODE HERE);
    //console.log(parts); 
    return SOME CODE GOES HERE
}) */




// reduce to get total....This can also be done in a single .reduce(), but we're practicing arrow functions here, so chain them!


//How to chain them, don't use ; at the end of a line. const filtered = array method
//.array method
//.array method
//etc.


let htmlArr = Array.from(document.querySelector('ul').children)

let filteredArr = htmlArr.filter(el => el.textContent.includes('Flexbox'))

let filtered = htmlArr.map(el => el.dataset.time)

let filteredSeconds = filtered.map(el => {
    return Number(el.split(':')[0]) * 60 + Number(el.split(':')[1])
})
let filteredTotal = (secondsArr => {
    let num = 0
    for (let i in secondsArr) {
        num += secondsArr[i]
    }
    return num
})(filteredSeconds)



console.log(filteredTotal)


//Q2

let numbers = [3,62,234,7,23,74,23,76,92].filter(el => el > 70)
