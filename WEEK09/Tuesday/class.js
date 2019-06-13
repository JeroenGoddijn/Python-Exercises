
// console.log('this is before');

// setTimeout(()=>{
//     console.log('inside of set time out');
// }, 2000);

// console.log('after set time out');


// PROMISES
// an object that may produce a single value some time in the future
// 3 states:
// * pending
// * fulfilled
// * rejected



let myPromise = new Promise((resolve, reject) => {
    // logic we want to execute
    setTimeout(() => {
        console.log('inside set time out');
        let i = 45;

        if (i == 45) {
            resolve(i)
        } else {
            reject('this function threw an error')
        }
    }, 1000)

})

myPromise.then((response) => {
    console.log(response);
    return(response, 'successful')
})

myPromise.then((response2) => {
    console.log(response2);
    return(response2, 'successful')
})
