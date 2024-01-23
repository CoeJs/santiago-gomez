# Filter: Exclusion

The ***filter*** operator allow us to exclude elements of a data structure according to a predicade giving as result a new data structure with the values that passed that predicade.

Here is an example:

```js
function filter(predicade, arr) {
    let result = [];
    for (let elem of arr) {
        if (predicade(elem)) {
            result.push(elem);
        }
    }
    return result;
}

function isLoggedIn(user) {
    return user.session != null;
}

filter(isLoggedIn, [
    { userId: 12, session: 'das9asdsd8' },
    { userId: 45 },
    { userId: 98, session: 'dadad3ds56' }
]); // [{ userId: 12, session: 'das9asdsd8' }, { userId: 98, session: 'dadad3ds56' }]
```