# Compose vs Pipe

Until now we have talked about compositions that is the return of a function pass as the input of another, but one thing we have not noticed is that that code execution goes right to left (like in a stack):

```js
function increment(x) { return x + 1 }
function triple(x) { return x * 3 }
function minus2(x) { return x - 2 }

// compose order goes right to left <--
var f = composeThree(minus2, triple, increment);
var g = composeThree(increment, triple, minus2);

f(4); // 13
g(4); // 7
```

There another operator called ***pipe*** that is very similar to the *compose* operator. They do the same but the only difference is pipe executes the code right to left:

```js
function increment(x) { return x + 1 }
function triple(x) { return x * 3 }
function minus2(x) { return x - 2 }

// compose order goes right to left <--
var f = composeThree(minus2, triple, increment);
var g = composeThree(increment, triple, minus2);

f(4); // 13
g(4); // 7

// compose order goes left to right -->
var h = pipeThree(minus2, triple, increment);

h(4); // 7
```