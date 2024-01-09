# Functions Naming Semantic

- Is not enough to have **inputs** and **outputs** to be considered as a function, a function must has a **relationship** between that inputs and outputs. 

For example, is better to have this:

```js
function shippingRate(size, weight, speed) {
    return ((size + 1) * weight) + speed;
}
```

than this:

```js
function f(x, y, z) {
    return ((x + 1) * y) + z;
}
```