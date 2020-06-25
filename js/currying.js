const buildSum = a => b => a + b

const tag = t => content => `<${t}>${content}</${t}>`

function sumThreeNumber (a, b, c) {
    return a + b + c
}

console.log(sumThreeNumber(1, 2, 3))

function sumThreeNumber(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

console.log(sumThreeNumber(1)(2)(3))

const sumThreeNumber = a => b => c => a + b + c
console.log(sumThreeNumber(1)(2)(3))