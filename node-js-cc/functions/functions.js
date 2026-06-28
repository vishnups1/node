// Function Naming: camelCase

function add(a, b) {
    c = a + b // c has local scope aka local variable.
    console.log(typeof(c)) // number
    return c
}

// default values
function add1(a = 0, b = 0) {
    return a + b
}

function oddOrEven(value) {
    if(value % 2 == 0) {
        return "even"
    }
    return "odd"  
}

var result = add(1, 3) 
console.log(result) // 4

var result = add() 
console.log(result) // NaN

var result = add1() 
console.log(result) // 0
