
const letterCount = (string, letter) => {
    let counter = 0;
    string = string.toLowerCase();
    string.split('').forEach(strLetter => {
        if (strLetter === letter) {
            counter++
        }
    });
    return counter;
}

console.log(letterCount("Maggy", "g"))
console.log(letterCount("Barry", "b"))
console.log(letterCount("", "b"))