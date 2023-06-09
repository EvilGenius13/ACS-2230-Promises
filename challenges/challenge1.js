/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 * Step 1, Step 3, Step 2. This is because Step 1 runs first, and Step 2 is within 
 * the snooze function for 2000ms. It then would jump to Step 3 before Step 2 would
 * complete.
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 * Step 1, Step 3, Step 2.
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 * It should be the same. I think it's due to the snooze function being set, even though
 * it's set to 0ms, it's still that split second wait to make the next code under it run.
 * I'm assuming it's almost instantaneous between Step 2/3 but 3 would happen first.
 * 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

