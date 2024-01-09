# Recursion

The definition of ***recursion*** *is the act of a function of being call by itself.*

For a functional programming aproach, recursion is a powerful and very important tool that we must get familiar with.

Let's think about a function that count the number of vowels thar are in a sentence:

```js
function isVowel(x) {
    return ['a', 'e', 'i', 'o', 'u'].includes(x);
}

function countVowels(sentence) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (isVowel(sentence[i])) {
            count++;
        }
    }
    return count;
}

countVowels('Culpa aute qui in fugiat voluptate labore ex non reprehenderit quis ullamco tempor commodo.'); // 35
```

The problem here for us, as the readers of the code, is that we need to execute the code in our minds to understand what the function does. In that specific for loop it could be so straightforward but if the code is complex it could take a lot of the focus we could be giving to another part of the code.

Here is where recursion comes as a tool to help us to have a more readable code. Recursion is not always the answer but mostly of the cases it could be a great way to solve a problem:

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

Recursion is not designed to be an imperative aproach, it is designed to be declarative. ***Declarative code does not mind how things happens, it is concerned about the output.***