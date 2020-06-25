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

console.log(Object.keys(car).length)

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

//console.log(Object.keys(car3).length)

let newCar3 = JSON.parse(JSON.stringify(car3));

console.log(car3, newCar3);
newCar3.year += 10
newCar3.own.age -= 10
console.log(car3, newCar3);





const addToList = (list, item, quantity) => {
    list.push(
        {
            item,
            quantity
        }
    )
    return list
}

let a = addToList(['1', '2', '3', '4'], 4, 7)
console.log(a)

const addToList2 = (list, item, quantity) => {
    const newList = JSON.parse(JSON.stringify(list));

    newList.push(
        {
            item,
            quantity
        }
    )
    return newList
}

const addToList3 = (list, item, quantity) => {
    const newList = list.slice();

    newList.push(
        {
            item,
            quantity
        }
    )
    return newList
}

let b = addToList3([1, 2, 3, 4], 4, 7)
console.log(b)

let listas = [1,2,3,4]
let aa = listas.push( 4, 88 )
console.log(aa)