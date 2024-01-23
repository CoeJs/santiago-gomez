# Flip and Reverse adapters

Another argument adapter than can be useful sometimes is to flip or reverse the order of the arguments that are passed to a function.

For example:

```js
function flip(fn) {
    return function flipped(arg1, arg2) {
        return fn(arg2, arg1);
    }
}

function reverse(fn) {
    return function reversed(...args) {
        return fn(...args.reverse());
    }
}

function f(...args) {
    return args;
}

var g = flip(f);
var h = reverse(f);

g(1, 2); // [2, 1]
h(1, 2, 3, 4); // [4, 3, 2, 1]
```