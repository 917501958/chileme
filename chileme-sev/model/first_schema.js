const mongoose = require('mongoose')
const schema = mongoose.Schema

const First = new schema({
    id : String,
    name : String,
    price : Number,
    count : Number,
})

module.exports = mongoose.model('First' , First)