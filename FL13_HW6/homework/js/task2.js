
const word = prompt('Type any word'), evenNumber = 2;

if (word.trim().length !== 0) {
    const even = (word) => {
        const middle = [(word.length - 1) / evenNumber, (word.length - 1) / evenNumber + evenNumber];
        return alert(word.slice(middle[0], middle[1]));
    };
    const odd = (word) => {
        const middle = (word.length - 1) / evenNumber;
        return alert(word[middle]);
    };
    
    word.length % evenNumber === 0 ? even(word) : odd(word);
} else {
    alert('Invalid value');
}
