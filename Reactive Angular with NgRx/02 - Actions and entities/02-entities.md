# Entities

*NgRx* give to us and tool called ***Entities*** to handle the *business* data in our store. *Entity* provides an API to manipulate and query entity collections. It offers some benefits:

- Reduces boilerplate for creating reducers that manage a collection of models.
- Provides performant CRUD operations for managing entity collections.
- Extensible type-safe adapters for selecting entity information.

A primary element of the *Entities* library is the entities ***Adapter.*** The entity adapter is a utility class that provides a series of utility functions that are designed to make it simple to manipulate entity state (e.g. AddMany, UpdateOne, AddOne, removeOne). 

The ***adapter*** is mostlty used to write reducer functions and logic.