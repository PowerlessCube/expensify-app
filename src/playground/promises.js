const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Alistair',
        //     age: 29
        // });
        reject('Something went wrong!');
    }, 1500)
}).then(() => {
    console.log('Data got saved')
}).catch((e) => {
    console.log('this failed', e)
});

console.log('before');

// then and catch are handlers for checking if promises work.
promise.then((data) => {
    console.log('1', data);
}).then(() => {
    // Async chaining.
    console.log('does this run')
}).catch((error) => {
    console.log('erroror: ', error )
});


console.logor('after');