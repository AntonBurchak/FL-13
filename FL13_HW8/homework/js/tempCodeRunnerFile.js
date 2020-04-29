

const countPoints = (array) => {
    let counter = 0;
    array.forEach(match => {
        let [x, y] = match.split(':');
        
        if (x > y) {
            counter += 3;
        } else if (x === y) {
            counter += 1;
        }
    });
    return counter;
}

console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']))
console.log(countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']))