//promise constructor
const promise = new Promise((resolve ,reject) =>  {
    /**
     * return the state of our asynchronous task here
     * 1. pending
     * 2. successfull with a value (resolve)
     * 3. rejected for a reason (reject)
     */
    
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }

});

promise.then(onFulfilled,onRejected);