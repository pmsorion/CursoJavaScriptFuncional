function buildSum(a) {
    return function(b) {
        return a + b
    }
}

const addFive = buildSum(5)

console.log(addFive(5))

//

const buildSum = a => b => a + b

