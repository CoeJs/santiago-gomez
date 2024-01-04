# Declarative data flow

When we use composition there are another important thing to have in mind and its the **data flow.** Composition is about to pass data from one place to another and that **data flow should be meaningful to us.** 

Let's take a look of the previous section example: 

```js
function increment(x) { return x + 1 }
function triple(x) { return x * 3 }
function minus2(x) { return x - 2 }

// Calculate the shipping rate
function getShippingRate(x) {
    return minus2(triple(increment(x)));
}

totalCost = basePrice + geteShippingRate(4);
```

Imagine there can be a lot of different shipping rates and they are composed by operations like increments, decrements, etc. They are similar but not equal. 

It could be useful to have a function that help us to build that shipping rates definitions without to have to define n specific function to n specific shipping rates.

Usually functional programming libraries already have helper functions to achieve that and we can think about it as something like this:

```js
function composeThree(fn3, fn2, fn1) {
    return function composed(x) {
        return fn3(fn2(fn1(x)));
    }
}
```

If we use that compose function utility our code would looks like:

```js
function increment(x) { return x + 1 }
function triple(x) { return x * 3 }
function minus2(x) { return x - 2 }

var getShippingRate = composeThree(minus2, triple, increment);

totalCost = basePrice + geteShippingRate(4);
```

It allow us to implement different shipping rates more easily, but the most important thing is that give us a more declarative way to implement our code and have better view of the data flow. ***A declarative data flow.***