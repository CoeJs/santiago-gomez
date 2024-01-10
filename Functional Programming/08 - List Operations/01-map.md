# Map: Transformation

The ***map*** operator allow us to transform each of the values of a data structure giving as result a new data structure with each of the values with the transformation applied.

Here is an example:

```js
function map(mapper, arr) {
    let result = [];
    for (let elem of arr) {
        result.push(mapper(elem));
    }
    return result;
}

function makeRecord(name) {
    return { id: uniqueId(), name };
}

map(makeRecord, ['Kyle', 'Susan']); // [{ id: 23, name: 'Kyle' }, { id: 42, name: 'Susan' }]
```