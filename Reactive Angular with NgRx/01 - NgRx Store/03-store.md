# Store

The store is the place where the data is saved through the application states.

Looking in deep the store class from NgRx library **extends** from the *Observable* class from **RxJs**, that means we can use all the methods that an observable has over the store object.

However there are 2 more methods that the store has and an observable does not: `select()` and `dispatch()`.

- `select()` is used to *query* the application state to have an specific slice of that state.
- `dispatch()` is used to notify the store something has changed.