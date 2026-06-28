let car = {
    brand: "Volkswagen",
    model: "Polo",
    price: 10,
}

console.log(car)

//////////////////////
// remove an item
//////////////////////

delete(car.price)

console.log(car)

//////////////////////
// add an item
//////////////////////

// car['price'] = 12
car.price = 12 // better option

console.log(car)

///////////////////////////////////
// Storing functions under objects
///////////////////////////////////

car.onRoadPrice = function() { return this.price + 2 } // 'this' means use the 'price' attribute of the same object

console.log(car.onRoadPrice())