# Memoization

Memoization is a technique that allows us to give a intermediate point between the lazy and the eager execution. It still allowing us to defer the code execution without to having to execute it everytime the function is called.

How to achieve that? Memoization uses a ***caching*** technique to store the output of a function when is executed it a certain input values so the code is only executed the first time and the next executions the stored return value is returned.

Let's take a look of the lazy version of our previous example:

```js
function repeater(count) {
    return function allTheAs() {
        return "".padStart(count, 'A'); // Code!!!
    };
}

var A = repeater(10);

A(); // "AAAAAAAAAA" <-- Code executed.
A(); // "AAAAAAAAAA" <-- Code executed.
A(); // "AAAAAAAAAA" <-- Code executed.
```

The memoizated version would looks like:

```js
function repeater(count) {
    var str;
    return function allTheAs() {
        if (str === undefined) {
            str = "".padStart(count, 'A'); // Code!!!
        }
        return str;
    };
}

var A = repeater(10);

A(); // "AAAAAAAAAA" <-- Code executed.
A(); // "AAAAAAAAAA"
A(); // "AAAAAAAAAA"
```