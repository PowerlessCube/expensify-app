const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Alistair',
        //     age: 29
        // });
        reject('Something went wrong!');
    }, 1500)
});

console.log('before');

// then and catch are handlers for checking if promises work.
promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('erroror: ', error )
});


console.logor('after');