const a = {
    value: 2
}

const addOne = () => a.value += 1

const timesTwo = () => a.value *= 2

addOne()
timesTwo()

console.log(a.value)

addOne()
timesTwo()

console.log(a.value)

//

const b = {
    value: 2
}

const addOne = b => Object.assign({}, b, { value: b.value + 1 })

const timesTwo = b => Object.assign({}, b, { value: b.value + 2 })

console.log(addOne(timesTwo(b)))
console.log(addOne(timesTwo(b)))