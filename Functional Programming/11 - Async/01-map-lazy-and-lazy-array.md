# Map Lazy and Lazy Array

Until now all the concepts we have learned has been explained with data that we have inmediately at that moment (e.g. 42, 'kyle', etc). But the good thing is that all that concepts also apply to async data.

Let's take an example with a synchronous code:

```js
let a = [1, 2, 3];
let b = a.map((v) => v * 2);
console.log(b); // [2, 4, 6]
```

That code allow us to map the values that are in `a` at the moment the map call is executed. If we push some other value into `a` it will no mapped into the `b` array.

So, imagine we have a function `mapLazy` that in some way build a relationship between `a` and `b` arrays over the time:

```js
let a = [];
let b = mapLazy((v) => v * 2, a);

a.push(1);
console.log(a); // [1]
console.log(b); // [2]

a.push(2);
console.log(a); // [1, 2]
console.log(b); // [2, 4]
```
It would be great that a function as `mapLazy` exists but for now in this inmmediate context it does not exist. So, what about if we could have a ***lazy array***?

Let's imagine something like that:

```js
let a = lazyArray();
setInterval(() => a.push(Math.random()), 1000);

let b = a.map((v) => v * 2);
b.forEach((v) => console.log(v));
```

With this approach every time `a` ***emits*** a new value it would be reflected on `b` array. It would be cool to have a lazyArray, doesn't it?