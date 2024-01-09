# Argument Shape Adapters

A function can have a different *shape* depending the number of input parameters and output values is has.

When a function has only 1 input and 1 output is called an ***unary*** function. When it has 2 inputs is called ***binary*** function. When there are more that 2 inputs is called ***enary*** function.

Sometimes is must be necesary to fit a function into an specific shape, so we can make a function adapters to adapt the arguments to that specific shape:

```js
function unary(fn) {
    return function one(arg) {
        return fn(arg);
    }
}

function binary(fn) {
    return function two(arg1, arg2) {
        return fn(arg1, arg2);
    }
}

function f(...args) {
    return args;
}

var g = unary(f);
var h = binary(f);

g(1, 2, 3, 4) // [1]
h(1, 2, 3, 4); // [1, 2]
```