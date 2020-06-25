//Object Oritented
class Person {
	constructor (name, age) {
		this.name = name
		this.age = age
	}
	getOld() {
		this.age +=1
	}
}

let person = new Person('Francisco', 52)
person.getOld()


//functional
const person = {
	name: 'David',
	age: 25
}
const getOld = person => Object.assign({}, 
	person, {age: person.age + 1})

getOld(person)


//Imperative

let array = [1, 2, 3]
let array2 = []
for (let i = 0; i < array.legth; i++) {
	array2.push(array[i] * 2)
}
//array2 -> [2, 4, 6]


//Declarative

let array = [1, 2, 3]
let array2 = array.map(item => item * 2)

//array2 -> [2, 4, 6]


