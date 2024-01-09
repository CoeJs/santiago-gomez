# Extracting Impurity

As we noticed before, side effects not always can be avoided however we can try to separate the impure part of a function of the pure part to minimize the impact of what we should take more care of.

Example:

```js
function addComment(userId, comment) {
    var record = {
        id: uniqueId(),
        userId,
        text: comment
    };
    var element = buildCommentElement(record);
    commentList.appendChild(element);
}

addComment(42, "My comment");
```

That block of code is not a pure function due to it has several side effects (no return, DOM changes and unique Ids generation). We can separate **(not avoid them)** that side effects to leave a pure function:

```js
function newComment(userId, commentId, comment) {
    var record = {
        id: commentId,
        userId,
        text: comment
    };
    return buildCommentElement(record);
}

var commentId = uniqueId();
var element = newComment(42, commentId, "My comment");
commentList.appendChild(element);
```