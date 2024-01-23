# Tail calls

There is a way to solve this memory limitation in the call stack and its called ***tail calls.***

The problem around the building of a stack frame is that it needs to store the whole local execution of a function to resume later due to we execute a function call in the middle of the code. 

But, what about when the new function call happens at the end of the function and it is isolated from any of the variables of the current function? 

Well, we don´t need to store a frame because all the variables and local processing is done and we don't need them anymore. With that in mind we coul reuse that frame and we would not need to create more frames. It would turn *n* number of frames into only ***one***

Unfornately tail calls is not something we get for free, the compiler and the execution environment needs to have support to it in order to make it works.

So, what about JavaScript? As long as there are a lot of JS engines everyone can decide how to implement the JS execution. 

A JavaScript engine for Microsoft can make things dramatically differently for the Windows operating system than say the chrome V8 was was doing on the MacOS architecture. **That is why JS has no support for tail calls.**