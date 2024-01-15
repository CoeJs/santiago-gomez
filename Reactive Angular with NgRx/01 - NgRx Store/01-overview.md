# Overview of Redux and NgRx

Whe we think about what makes a project complexity increase one of the main reasons is the ***state management.*** 

It is very common to have big complex data flows through an a big application and the handling of that data makes the app harder to mantain. 

Here is where ***NgRx*** becomes a great tool. NgRx is the angular version of ***Redux*** library built for react. 

The main objective of using a state management library is to unify the source of the data of the application. That way we only pull the data from one side and everytime the data changes it will change in any of its consumers.

To achieve that, there are some fundamental concepts we need to take into account:

1. The whole data is stored into a ***store*** (It will be our *source of truth*).
2. That *store* has ***states*** that can change over time. We can think of states of the data as a tree that we can go over backward and forward.
3. The *states* are inmmutable data. If we want to change some state we need a ***reducer.*** The *reducer* will return a new state accordig to a given ***action.***
4. There are ***selectors*** that we can use to pull a slice of the state data. 