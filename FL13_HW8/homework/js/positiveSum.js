
const positiveSum = (array) => {
    return array.filter(num => num > 0).reduce((acc, cur) => acc + cur, 0)
}
console.log(positiveSum([2, 4, 6, 8]))
console.log(positiveSum([0, -3, 5, 7]))
