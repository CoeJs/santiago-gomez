# Functions vs Procedures

- Functions need to have **input values** (No input is a valid input) and **return output values.** If a function has not return then it is not a function, its a procedure.

- A function **only can call other functions** inside of it. If a function call a **procedure** then it becomes a **procedure.**

For example:

```
function sum(x=0, y=0) {
    console.log(x + y);
}

function moreSum(x=0) {
    return sum(x, 40);
}
```

The *function* **sum** is not a function because **it does not return** any value. **moreSum** is not either a function because it **internally calls the sum procedure.** 

Another example:

```
function multiply(x=0, y=0) {
    return x * y;
}
```

In this case the *function* **multiply** is a function because it has inputs, a return value and it has no intern calls to anything that is not a function.