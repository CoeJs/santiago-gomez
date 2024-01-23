# Transduction

There can be moments where we could need to make consecutive list operators, for example, a consecutive execution of mapper functions: 

```js
function addOne(x) { return x + 1 }
function subsThree(x) { return x - 3 }
function double(x) { return x * 2 }

let numbers = [1, 2, 3, 4, 5];
numbers.map(addOne)
       .map(double)
       .map(subsThree);
```

The problem here is that we are making a full array iteration per map. If the array length beigns bigger it could be turn into a performance issue. 

To fix that we can ***fusion*** that 3 mapper functions and make the array iteration once:

```js
function addOne(x) { return x + 1 }
function subsThree(x) { return x - 3 }
function double(x) { return x * 2 }

let numbers = [1, 2, 3, 4, 5];
numbers.map(compose(subsThree, double, addOne));
```

Composition can be used here because all the three map functions are the same shape. But, what happens when we can secuentially execute a combination of mappers, filters and reducers? We can not simply compose them due to they have different shapes.

There is a way to achieve that and is throught ***transduction.*** Transduction help us to compose maps and filters together by turning that mappers and filter functions into a reducers. 

In other words *transduction is a compose for reducers.* Lets have the following example:

```js
function addOne(x) { return x + 1 }
function isOdd(x) { return x % 2 == 0 }
function sum(total, x) { return total + x }

let numbers = [1, 2, 3, 4, 5];
numbers.map(addOne)
       .filter(isOdd)
       .reduce(sum);
```

Appliying tranduction we could have something like this:

```js
function addOne(x) { return x + 1 }
function isOdd(x) { return x % 2 == 0 }
function sum(total, x) { return total + x }

let transducer = compose(mapReducer(addOne), filterReducer(isOdd));

let numbers = [1, 2, 3, 4, 5];

transduce(
    transducer, // Transducer fn
    sum, // Reducer fn
    0, // Initial value
    numbers // Values list
);

```

There are some things that are important to notice:

1. `mapReducer` and `filterReducer` are utilities that we can fin on most of functional programming libraries and they allow us to turn map and filter into reducers.
2. We don't need to apply any utility over the `sum` function due to it is already a reducer function.
3. `transduce` function needs a final reducer to work. In this case we are using the `sum` reducer.
