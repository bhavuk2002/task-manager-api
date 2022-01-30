const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    // useCreateIndex: true // useCreateIndex is depriciated // both depriciated
})



// const task = new Task({
//     description: 'Do Laundary',
//     completed: false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })

// const me = new User({
//     name: 'Bhavuk',
//     age: 19,
//     email: 'vvbnmittal@gmail.com',
//     password: 'Pasord'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })