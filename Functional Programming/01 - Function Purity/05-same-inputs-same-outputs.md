# Same Inputs, Same Outputs

Another important thing that affect the definition of what a *pure* function is, is that pure functions calls **act in isolation.** 

What does it means? It means that a pure function call have to return the same values if the same parameters are sent no matter how many times it excecutes. 

Example:

```js
// Pure
function addTwo(x, y) {
    return x + y;
}

// Impure
function addAnother(x, y) {
    return x + y + Math.random();
}
```