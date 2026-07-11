function simplePromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve('Promise completed!'); }, 1000);
    });
}

simplePromise().then((message) => { console.log(message); });