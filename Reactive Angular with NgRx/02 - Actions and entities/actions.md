# Actions

Actions are the objects that describe what type of change will the reducer perform over the current application state.

We can imagine an action as a simple interface like:

```ts
export interface Action {
    type: string;
    payload?: any;
}
```

The `type` property tells to the reducer what action needs to perfom.

The `payload` property is not always required but in it sould be all the additional data that the reducer needs to perform the change logic triggered by the `type` property.