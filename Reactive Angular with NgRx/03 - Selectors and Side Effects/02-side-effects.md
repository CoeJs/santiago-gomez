# Side Effects

Until now we have covered all the basic concepts of NgRx and redux pattern, but there are a new concept that will allow us to deal with asynchronous operations. 

Let's imagine we have and HTTP call that takes some seconds in resolve and its in the middle of our NgRx implementation. Here is where ***effects*** come in. 

We can think *effects* as a ***middleware*** that sits between the application and the reducer.

So, we could have an action `fetchData` wich is the trigger to consume the data from the HTTP call and another `dataFetched` action that will store the new state into our storage.

But, how `fetchData` will perform an HTTP call? Well, an ***effect*** would be *"subscribed"* to `fetchData` action call. Then it will perform the async call and after that it will invoke the `dataFetched` action with the result data:

```ts
@Effect()
fetchData$ = this.dataPersistence.fetch(ActionTypes.fetchData, {
    run: (action: fetchData , state: AppState) => {
    return this.dataService.fetchAll()
        .pipe(map((result: Data[]) => new dataFetched(result)));
    },
    onError: () => {}
});
```