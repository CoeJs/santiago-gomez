# Inmutability

Inmutability refers to the idea that something is not going to change. It's not just that things don't change, it's that things don't change unexpectedly. **The point of immutability is that change that needs to occur needs to be intentional.**

There are two types of mutabilities we must take care about. The first one is the ***assigment mutability*** and it happens when we re-assign variables in code execution:

```js
let basePrice = 240;
const shippingRate = 25;

...

basePrice += 20; // Allowed

...

shippingRate *= 1.02; // Not allowed
```

A functional programming aproach would be like:

```js
let basePrice = 240;
const shippingRate = 25;

function increaseBasePrice(price) {
    return price + 20;
}
increaseBasePrice(basePrice);

function increaseShippingRate(rate) {
    return rate * 1.02;
}
increaseShippingRate(shippingRate);
```

That code not resolve the re assigment logic but it separates the amount calculations of the value assigments. If we want to assign the value calculations to a variable its a question that we can answer appart.

The second mutability we have to take care with is the ***value mutability.*** Value mutability happens when the value of a variable changes (not re-assigned). It usually happens in non-primitive variable types:

```js
const orderDetails = {
    orderId: 42,
    total: (basePrice + shipping)
};

if (orderItems.length > 0) {
    orderDetails.items = orderItems; // Value mutation!!
}

processOrder(orderDetails);
```

*const* keyword is not useful here because it only prevents variable to be re-assigned but there is another workaround to explicit tells to the reader *"Hey, this object is read only, it should not change":*

```js
const orderDetails = {
    orderId: 42,
    total: (basePrice + shipping)
};

if (orderItems.length > 0) {
    orderDetails.items = orderItems; // Value mutation!!
}

processOrder(Object.freeze(orderDetails));
```