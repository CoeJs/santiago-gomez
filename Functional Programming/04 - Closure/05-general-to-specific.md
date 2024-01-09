# General to specific

There can be moments when we could make a function more specific in its work in order to improve the code semantic and the explicit relationship between other parts of our code.

Supose we have and ***ajax*** function that makes http calls and execute a callback:

```js
function ajax(url, params, callback) {
    ...
}

ajax(CUSTOMER_API, { id: 42 }, renderCustomer);
```

We could have parts of our code where we are always having customers, so it can be better to have a more specific function to fetch customers that benefis the code semantic:

```js
function ajax(url, params, callback) {
    ...
}

function getCustomer(params, callback) {
    return ajax(CUSTOMER_API, params, callback);
}

getCustomer({ id: 42 }, renderCustomer);
```

The code `getCustomer({ id: 42 }, renderCustomer);` has a better semantic than `ajax(CUSTOMER_API, { id: 42 }, renderCustomer);` and they have the same output.

Even we could have sections where we could want to be more specific (for example get always the same customer):

```js
function ajax(url, params, callback) {
    ...
}

function getCustomer(params, callback) {
    return ajax(CUSTOMER_API, params, callback);
}

function getCurrentCustomer(callback) {
    getCustomer({ id: 42 }, callback);
}

getCurrentCustomer(renderCustomer);
```

Turn general functions to specific functions will not always be the best approach but there can be moments when being more specific will improve a lot the semantic of the code without making any big impact.