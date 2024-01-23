# Observables

We actually don't have *lazyArrays* but what we already have is ***observables.*** 

All the hypothetical concepts we were talking about over lazy arrays are essentially *observables:*

```js
let a = new Rx.Subject();
setInterval(() => a.next(Math.random()), 1000);

let b = a.map((v) => v * 2);
b.subscribe((v) => console.log(v));
```