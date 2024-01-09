# Closure

"A ***Closure*** is when a function *remembers* remember the variables around it **even when that function is executed elsewhere.**"

```js
function makeCounter() {
    var counter = 0;
    return function increment() {
        return counter++; // Closure!!! 
    }
}

var c = makeCounter();
c(); // 1
c(); // 2
c(); // 3
```

In this fragment of code the ***increment*** function is making an increment of the ***counter*** variable that is out of its scope and it will still having access to that variable no matter when is executed. That is a closure.

But, does the call of the ***c*** function is a pure function call? No, its not. Closures are not necessarily functionally pure but can be absolutely used in functional programming. 