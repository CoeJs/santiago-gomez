# Side Effects

Side effects are all the code execution commands that **change the state of the system.** A pure function should avoid the use of these side effects but it is barely posible.

There are a lot of instructions that are considered as side effects and some of them are simply imposible to avoid because of its nature or the nature of the code itself. If you **can not avoid one side effect** then **make it obvious.**

Some examples of side effects:

- Indirect inputs and ouputs
- I/O (console, files, etc)
- Database storage
- Network calls
- DOM
- Timestamps
- Random numbers
- *CPU Heat*
- *CPU Time Delays*

For example, a code with side effects:

```js
function shippingRate() {
    rate = ((size + 1) * weight) + speed;
}

var rate;
var size = 12;
var weight = 4;
var speed = 5;
shippingRate();
console.log(rate); // 57

size = 8;
speed = 6;
shippingRate();
console.log(rate); // 42
```

And the same code without side effects:

```js
function shippingRate(size, weight, speed) {
    return ((size + 1) * weight) + speed;
}

var rate;
rate = shippingRate(12, 4, 5); // 57
rate = shippingRate(8, 4, 6); // 42
```