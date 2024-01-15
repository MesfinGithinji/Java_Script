const promise = new Promise((resolve , reject ) => {
    //operation 

    if (success){
        resolve(value)
    } else {
        reject(error);
    }

});

promise.then(onFullfilled,onRejected);
