getFullName = (firstName, lastName) => {
    return firstName + " " + lastName
}

sayHello = (name) => {
    return `Hello, ${name}!`
}

// Named Exports: Adds a specific named property to the export container.
// exports.sayHi = (name) => {
//     return `Hi, ${name}!`
// }

// Default Export or Main Export
module.exports = {
    getFullName,
    sayHello,
}

// Nodejs does the below behing the scenes
// let modules = {exports: {}}; // This is the export container
// let exports = module.exports;