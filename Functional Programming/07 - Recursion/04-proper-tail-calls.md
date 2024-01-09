# Proper Tail Calls

*Tail calls* were not implemented in JavaScript until the ES6 release. In ES6 the new standar implements an specific way to get tail calls called ***proper tail calls.***

The name *proper* mean you have to follow some requeriments to that tail call does not create an aditional call frame:

1. You have to have *strict mode* **on**
2. You have to have your function call in what is called a *proper tail position*, it has to be a proper tail call:
   
   - Proper tail calls require a **return** keyword and a **single function call**, and **nothing else in that expression that needs to be computed afterwards.**

Let's turn our previous recursive function in one that uses tail calls properly:

```js
function isVowel(x) {
    return ['a', 'e', 'i', 'o', 'u'].includes(x);
}

function countVowels(sentence) {
    if (sentence.length === 0) return 0;
    let first = isVowel(sentence[0]) ? 1 : 0;
    return first + countVowels(sentence.slice(1));
}

countVowels('Culpa aute qui in fugiat voluptate labore ex non reprehenderit quis ullamco tempor commodo.'); // 35
```
This code is not in a proper tail call due to the aditional computation that it needs to perform when contVowels functions is called: `return first + countVowels(sentence.slice(1));`

```js
'use strict';

function isVowel(x) {
    return ['a', 'e', 'i', 'o', 'u'].includes(x);
}

function countVowels(count, sentence) {
    if (sentence.length === 0) return count;
    count += isVowel(sentence[0]) ? 1 : 0;
    return countVowels(count, sentence.slice(1));
}

countVowels(0, 'Culpa aute qui in fugiat voluptate labore ex non reprehenderit quis ullamco tempor commodo.'); // 35
```

That way we can have the advantage of tail calls.

But there is something that still needs to be changed and it is that initial `0` we pass into the function call. It might be abstract and non intuitive.

So we can use the *curry* helper to fit the shape of our funtion into an unary function and abstract that initial value:

```js
'use strict';

function isVowel(x) {
    return ['a', 'e', 'i', 'o', 'u'].includes(x);
}

let countVowels = curry(2, function countVowels(count, sentence) {
    if (sentence.length === 0) return count;
    count += isVowel(sentence[0]) ? 1 : 0;
    return countVowels(count, sentence.slice(1));
})(0);

countVowels('Culpa aute qui in fugiat voluptate labore ex non reprehenderit quis ullamco tempor commodo.'); // 35
```