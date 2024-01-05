# Don't Mutate, copy

***Read-only*** structures are data structures that don't need to be mutated. It can be created and has some mutation in the process, but at some point, it freeze, it's done, it's final, it's complete.

But it is kinda uthopic to have a functional program that has all its structure in a read-only state. 

With that in mind we can not assume in a function that one of the params we received was freezed before passing it and become in a read-only state:

```js
function processOrder(order) {
    if (!('status' in oder)) {
        order.status = 'completed'; // Mutation!!
    }
    saveToDataBase(order);
}
```

So we can not be sure if that input was freezed and we will not have a code failure for trying to mutate it. The fix for that is create a copy of that structure and do whatever you want to it without to affect the original input:

```js
function processOrder(order) {
    let processedOrder = { ...order };
    if (!('status' in processedOrder)) {
        processedOrder.status = 'completed';
    }
    saveToDataBase(processedOrder);
}
```

To resume the mutability handling we can use this 2 principles:

1. **If we need to pass a structure that is inmutable**, we should annotate it with something like object.freeze **to say to the reader, don't worry about it, it can't be changed.**
2. When you receive a data structure, no matter what, **assume that it should be read-only.**