# What i learned

## Using setTimout with await in async function
To use setTimeout as an awaitable promise in JavaScript, you need to create a new Promise object that resolves after a specified delay, achieved by placing the setTimeout function inside the promise's executor function. 
This approach allows you to use await with the promise, causing the asynchronous operation to pause execution for the specified time before continuing, thus simulating a sleep function in a more readable and manageable way compared to traditional callback-based implementations.

## Promises
### What is a Promise
A `Promise` is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.
This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

### States:
A `Promise` is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

A promise is said to be settled if it is either fulfilled or rejected, but not pending

![alt text](image.png)

### Chaind Promises

The promise methods `then()`, `catch()`, and `finally()` are used to associate further action with a promise that becomes settled. 
The `then()`  method takes up to two arguments; the first argument is a callback function for the fulfilled case of the promise, and the second argument is a callback function for the rejected case.

The `catch()` and `finally()` methods call `then()` internally and make error handling less verbose. For example, a `catch()` is really just a `then()` without passing the fulfillment handler. As these methods return promises, they can be chained. For example:

```
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("foo")
        }, 300)
    })

    myPromise
        .then(handleFulfilledA, handleRejectedA)
        .then(handleFulfilledB, handleRejectedB)
        .then(handleFulfilledC, handleRejectedC)
```

For example, in the code above, if `myPromise` rejects, `handleRejectedA` will be called, and if `handleRejectedA` completes normally (without throwing or returning a rejected promise), the promise returned by the first then will be fulfilled instead of staying rejected.

Therefore, if an error must be handled immediately, but we want to maintain the error state down the chain, we must throw an error of some type in the rejection handler. On the other hand, in the absence of an immediate need, it is simpler to leave out error handling until the final catch() handler.

```
    myPromise
        .then(handleFulfilledA)
        .then(handleFulfilledB)
        .then(handleFulfilledC)
        .catch(handleRejectedAny)
```

