# Lazy vs Eager execution

When we have a function that uses closure it may happen that the code execution is done in the function definition or it can be deferred to the function call. Depending of when the code is executed we may call it ***Lazy*** (or *deferred*) or ***Eager*** execution.

Let's take a look at this:

```js
function repeater(count) {
    return function allTheAs() {
        return "".padStart(count, 'A'); // Code!!!
    };
}

var A = repeater(10);

A(); // "AAAAAAAAAA" <-- Code executed.
A(); // "AAAAAAAAAA" <-- Code executed.
```

This fragment of code has a Lazy execution because it deferred the code execution (the padStart block for this example) until the A function is called.

Lazy execution allow us to conditionally execute fragments of code that could be complex but the downside part is that that code execution may happen more than once.

The Eager execution of the same code would looks like this:

```js
function repeater(count) {
    var str = "".padStart(count, 'A'); // Code!!!
    return function allTheAs() {
        return str;
    };
}

var A = repeater(10); // <-- Code executed.

A(); // "AAAAAAAAAA" 
A(); // "AAAAAAAAAA"
```

Eager execution allows us to execute the code once no matter how many times the function is called because the code execution happens in the function definition. The downside part of it is that the code is not more conditional in its execution, it will execute once but it will always execute.