/*
    Во всех реализованных ниже функциях используется императивный вариант написания функций,
    так как использование встроенных Array.forEach, .map, .filter и т.д. я посчитал не уместным.
    Во всех остальных проектах я использую только декларативный метод.
*/

const convert = (...args) => {
    const newArray = [];
    for (let i = 0; i < args.length; i++) {
        newArray.push(typeof args[i] === 'string' ? +args[i] : String(args[i]))
    }
    return newArray;
} 
// console.log(convert('1', 2, 3, '4')) // [1, '2', '3', 4]

const executeforEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

const mapArray = (array, callback) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(+array[i], i, array));
    }
    return newArray;
}

const filterArray = (array, callback) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) { 
        if (callback(array[i])) {
            newArray.push(array[i])
        }
    }
    return newArray;
}
// console.log(filterArray([2, 5, 8], (el) => el % 2 === 0 ))

const containsValue = (array, param) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === param) {
            return true;
        }
    }
    return false;
}
// console.log(containsValue([12, 4, 6], 5))

const flipOver = (string) => {
    let finalString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        finalString += string[i]
    }
    return finalString;
}

// console.log(flipOver('hey world'));

const makeListFromRange = (range) => {
    const [minRange, maxRange] = range, array = [];
    for (let i = minRange; i <= maxRange; i++) {
        array.push(i);
    }
    return array;
}

// console.log(makeListFromRange([2, 7])) // [2, 3, 4, 5, 6, 7])

const fruits = [
    { name: 'apple', weight: 0.5 },
    { name: 'pineapple', weight: 2 }
];

const getArrayOfKeys = (obj, key) => {
    const newArray = [];
    for (const iterator of obj) {
        newArray.push(iterator[`${key}`])
    }
    return newArray;
}
// console.log(getArrayOfKeys(fruits, 'name'))

const substitute = (array) => {
    return mapArray(array, el => el > 10 && el < 20 ? '*' : el);
}
// console.log(substitute([58, 14, 48, 12, 31, 19, 10]))

// const date = new Date(2020, 0, 2); 
const getPastDay = (date, num) => {
    const dayMilliseconds = num * (24*60*60*1000);
    const currentDate = new Date();
    currentDate.setTime(date.getTime() - dayMilliseconds);
    return currentDate.getDate();
}
// console.log(getPastDay(date, 1));
// console.log(getPastDay(date, 2));
// console.log(getPastDay(date, 365));

const formatDate = (date = new Date()) => {
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const dateFormatted = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

    let formattedDate = `${date.getFullYear()}/${month}/${dateFormatted}`;
    formattedDate += ` ${hours}:${minutes}`
    
    return formattedDate;
}
console.log(formatDate(new Date('6/15/2019 09:15:00')))