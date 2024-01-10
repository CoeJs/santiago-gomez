# Reduce: Combination

A ***reducer*** is an operation a bit more complex than maps and filters, it allows us to combine the elements of a data structure regarding a given reducer predicate into a result value.

Its importan to notice that result value can be a primitive value or it can be a new complex data structure.

Here is an example of a reducer:

```js
function reduce(reducer, initialValue, arr) {
    let result = initialValue;
    for (let elem of arr) {
        result = reducer(result, elem);
    }
    return result;
}

function addToRecord(record, [key, value]) {
    return { ...record, [key]: value };
}

reduce(addToRecord, {}, [
    ['name', 'Kyle'],
    ['age', 39],
    ['isTeacher', true],
]); // { name: 'Kyle', age: 39, isTeacher: true }
```