# Pure Functions and Constants

Until now the definition of a *pure* function is a function that has **explicit** inputs and outputs and **has no side effects.**

Lets take a look on this:

```js
// Pure
function addTwo(x, y) {
    return x + y;
}

// Impure
function addAnother(x, y) {
    return addTwo(x, y) + z;
}
```

Why addAnother is impure? It is because it has a implicit input (z) that is a side effect. But what about this:


```js
const z = 1;

function addTwo(x, y) {
    return x + y;
}

function addAnother(x, y) {
    return addTwo(x, y) + z;
}
```

In this case if we can assume **z** variable is a constant and it will not change in the time it should equivalent to have this:

```js
function addAnother(x, y) {
    return addTwo(x, y) + 1;
}
```

And that is a pure function. So, if we can asume the implicit inputs on a function **are constants that are not going to change in the time or change the state of the system** we can say that the function is a **pure function.**