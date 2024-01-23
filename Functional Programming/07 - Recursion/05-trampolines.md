# Trampoline

There is another technique that allow us to avoid the call stack limitation and it is called ***trampolines.***

The idea here is not to have a long inner call stack but have a *trampoline* bettween the calls and the returns of the recursive function. For that we need an trampoline utility tha would looks like: 

```js
function trampoline(fn) {
    return (...args) => {
        let result = fn(...args);
        while (typeof result === 'function') {
            result = result();
        }
        return result;
    };
}
```

And we can use it like this:

```js
function isVowel(x) {
    return ['a', 'e', 'i', 'o', 'u'].includes(x);
}

let contVowels = trampoline(function countVowels(count, sentence) {
    if (sentence.length === 0) return count;
    count += isVowel(sentence[0]) ? 1 : 0;
    return () => {
        countVowels(count, sentence.slice(1));
    };
});

// Optionally:
countVowels = curry(2, countVowels)(0);

countVowels('Culpa aute qui in fugiat voluptate labore ex non reprehenderit quis ullamco tempor commodo.'); // 35
```

That way we avoid the call stack limitation due to our function call stack will be always size 1.