const word = prompt('Type any word'),
    evenNumber = 2;

const styledOut = (word, subword, type = 'even') => {

    const char = 
        type === 'even' ? 
        word.slice(subword[0], subword[1]) : 
        word[subword];

    const firstPart = 
        type === 'even' ?
        word.slice(0, word.indexOf(char)) : 
        word.slice(0, subword);

    const lastPart =
        type === 'even' ?
        word.slice(word.indexOf(char) + char.length, word.length) :
        word.slice(subword + char.length, word.length);

    const str = `${firstPart}**${char.toUpperCase()}**${lastPart}`;

    return str;

}

if (word.trim().length !== 0) {

    const even = (word) => {
        const middle = [(word.length - 1) / evenNumber, (word.length - 1) / evenNumber + evenNumber];
        return alert(
            `${styledOut(word, middle, 'even')}\n Middle characters of the word: '${word.slice(middle[0], middle[1])}'
            `);
    };

    const odd = (word) => {
        const middle = (word.length - 1) / evenNumber;
        return alert(`${styledOut(word, middle, 'odd')}\nMiddle character of the word: '${word[middle]}'`);
    };

    word.length % evenNumber === 0 ? even(word) : odd(word);
} else {
    alert('Invalid value');
}   