# Reducers

A reducer is a functions that is able to change the state of an store. It works receiving as inputs a ***current state*** and an ***action*** to be performed over that state.

A very simple reducer could looks like:

```ts
function exampleReducer(state: ExampleState = initialState, action): ExampleState {
    switch(action.type) {
        case 'create':
            // Perform 'create' logic and return a new state
            return newState;
        default:
            return state;
    }
}
```

It is important to notice some things:

1. The default behavior when there is no a case that match to the input action is to return the same input state without any change.
2. The `action` parameter is an interface that contains a `type` attribute, it usually has also a payload but it is not mandatory.
3. As a general advice is to perform the state change logics by delegating that to an standalone function. It is more testeable and it makes ud to avoid nested code logic. 