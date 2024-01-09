# Point Free

Mathematically talking for a function **f(x)** the input values that are passed to that function are called *points.* So in programming these points are refering to the input parameters of that function.

Sometimes avoing to explicity declare that inputs in the definition of a function can help us to improve the readability of our code so we can use some techniques to achieve that. 

Take a look at the following function:

```js
function isOdd(x) {
    return x % 2 == 1;
}

function isEven(x) {
    return !isOdd(x);
}

isEven(4); // true
```

Why not simply for the **isEven** function to return *x % 2 == 0* ?

There someting valuable in this code and that is re relationship between the isOdd and the isEvent function. If we remplace the negation statement we will make implicit that relationship that define a odd number is the negation of a even number.

With that said, what is the contribution of passing the x parameter from the isEven function wrapper to the isOdd function? We could improve our code to focuses in a point free style to achieve a better readability:

```js
function not(fn) {
    return function negated(...args) {
        return !fn(...args);
    }
}

function isOdd(x) {
    return x % 2 == 1;
}

isEven = not(isOdd);
isEven(4); // true
```