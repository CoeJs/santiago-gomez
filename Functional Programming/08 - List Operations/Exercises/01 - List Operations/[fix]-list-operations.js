"use strict";

function number(x) {
    return () => {
        return x;
    };
}

function add(x, y) {
    return x + y;
}

function add2(fn1, fn2) {
    return add(fn1(), fn2());
}

// Using for loop
function addnL(fns) {
    let result = 0;
    for (let fn of fns) {
        result = add2(number(result), fn);
    }
    return result;
}

// Using recursion
function addnR(fns, count = 0) {
    count = add2(number(count), fns[0]);
    if (fns.length === 1) return count;
    return addnR(fns.slice(1), count);
}

// Using reducer
function addn(fns) {
    return fns.reduce((count, fn) => {
        return add2(number(count), fn);
    }, 0);
}

function uniqueValues(arr) {
    return [...new Set(arr)];
}

function onlyEven(arr) {
    return arr.filter((num) => num % 2 == 0);
}

function mapToFns(arr) {
    return arr.map((num) => number(num));
}

let numbers = [1, 2, 1, 3, 4, 5, 5, 5, 6, 7];
numbers = uniqueValues(numbers);
numbers = onlyEven(numbers);
numbers = mapToFns(numbers);
console.log(addn(numbers));