# Composition

In functional programming a composition happens when *the output* of a function becomes *the input* of another function.

Take the following code as an example: 

```js
function increment(x) { return x + 1 }
function triple(x) { return x * 3 }
function minus2(x) { return x - 2 }

// Calculate the shipping rate
var tmp = increment(4);
tmp = triple(tmp);
totalCost = basePrice + minus2(tmp);
```

The code above uses some operation functions to calculate a shipping rate making use of a temporal variable to store the intermediate values. Applying composition the code would looks like:

```js
function increment(x) { return x + 1 }
function triple(x) { return x * 3 }
function minus2(x) { return x - 2 }

// Calculate the shipping rate
totalCost = basePrice + minus2(triple(increment(4)));
```

Or even better, we could abstract the shipping rate calculation in order to improve the code manteniability and readability:

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