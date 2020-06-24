let a = 1;
let b = a;

console.log(a, b);

b += 1;

console.log(a, b);

let car = {
    color: 'Red',
    year: 2019,
    km: 0
}

let newCar = Object.assign({}, car);


console.log(car, newCar);

newCar.year += 1

console.log(car, newCar);

let car2 = {
    color: 'Yellow',
    year: 2020,
    km: 0,
    own: {
        name: 'Fran',
        age: 52
    }
}

let newCar2 = Object.assign({}, car2);


console.log(car2, newCar2);
newCar2.year = 2555

console.log(car2, newCar2);

newCar2.own.age += 5
console.log(car2, newCar2);

let car3 = {
    color: 'Yellow',
    year: 2020,
    km: 0,
    own: {
        name: 'Fran',
        age: 52
    }
}

let newCar3 = JSON.parse(JSON.stringify(car3));

console.log(car3, newCar3);
newCar3.year += 10
newCar3.own.age -= 10
console.log(car3, newCar3);