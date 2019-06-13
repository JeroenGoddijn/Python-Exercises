let db = require('./models')

// db.user.findAll()
// .then((results)=>{
//     results.forEach(record => {
//         console.log(record.id, record.firstName, record.lastName);
//     });
// })

let user = db.user;

user.findAll({where:{lastName: 'Coffee'}})
.then((results)=>{
    results.forEach(record =>{
        console.log(record.firstName, record.lastName);
    })
})