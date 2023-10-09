/**
 * In Computer Science a queue is an abstract Data Structure where items are kept in order.
 * New items can be added at the back of the queue and old items are taken off from the front of the queue.
 */

function nextInLine(arr, item) {
    arr.push(item); //push or add data to the end of the array(queue)
    let removedItem = arr.shift(); //remove data from the beginning of the array(queue)
    return removedItem;
}

let testArr = [1, 2, 3, 4, 5];


console.log(`Before : `+ JSON.stringify(testArr));
console.log("Removed item: "+ JSON.stringify(nextInLine(testArr,6)));
console.log("After: " + JSON.stringify(testArr));
