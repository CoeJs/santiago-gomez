# Selectors

***Selectors*** are pure functions used for obtaining slices of store state and **NgRx** provides a few helper functions for optimizing this selection. 

The main advantage of using NgRx selectors is that they implements *Memoization* and are *Type Safe.*

***Selectors are basically the NgRx change detection mechanism.*** When a state is updated, NgRx doesn't do any comparison between old state and the new state to figure out what observables to trigger.

It simply **sends a new state** through all **top level selectors.** And since selectors use memoization, they compare parts of the state and only pass down the state if the changes are detected.