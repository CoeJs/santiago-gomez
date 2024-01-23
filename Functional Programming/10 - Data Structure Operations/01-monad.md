# Monad

The concept of ***monad*** can be in a hight level definition the *functional programming data structure.* 

It refers into a **single discrete value wrapper** that provides a **set of predictible behaviors that let it interact with other monads:**

```js
function Just(val) {
    return { map, chain, ap };

    function map(fn) {
        return Just(fn(val));
    }

    // Aka: bind, flatMap
    function chain(fn) {
        return fn(val);
    }

    function ap(anotheMonad) {
        return anotherMonad.map(val);
    }
}
```