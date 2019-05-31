


// const greeting = (fname, lname) => {
//     console.log(`${fname} ${lname}`);
// }

// setTimeout(() => {
//     console.log('inside set time out')
// }, 2000);

// console.log('Before the function call');

// greeting('Veronica', 'Lino');

// console.log('After the function call');

const app = (pathURL, callback) => {

    let request = {
        url: pathURL,
        objType: 'request'
    };

    let response = {
        objType: 'response'
    };

    callback(request,response);
}

app('/something', (req, res)=>{
        console.log(req.url);
        console.log(req.objType);
        console.log(res.objType);
})