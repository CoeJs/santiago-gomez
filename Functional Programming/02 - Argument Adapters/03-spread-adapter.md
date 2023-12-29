# Spread Adapter

Sometimes we could wanting to pass an array of values and make it fit into individual input to a function. In that cases we can use the spread adapter:

```js
function spread(fn) {
    return function spreaded(args) {
        return fn(...args);
    }
}

function f(x, y, z, w) {
    return x + y + z + w;
}

var g = spread(f);

g(1, 2, 3, 4); // 10
```