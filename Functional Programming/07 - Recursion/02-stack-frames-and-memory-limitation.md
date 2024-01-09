# Stack frame and memory limitation

Recursion has a big problem and it is recursion is great on theory but it gets complicated on practice.

Programmatically talking when you call a function in the middle of the execution of another function a *frame* (like an snapshot of the state of the program execution) and **added to the stack** to be resumed when that las function is done.

The problem here is that the stack frames **requires memory** to be stored and due to that browsers and other execution environments have **memory limitations of how many frames can be on the call stack.**

In a common program execution, this stack does not exceeds 15-20 frames inside, but when we think in recursion might have amounts of frames that are not trivial.