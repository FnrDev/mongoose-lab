const mongoose = require('mongoose')

const resturauntSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 100
    },
    isOpen: {
        type: Boolean,
        default: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        min: 8,
        max: 10
    }
})

const Resturaunt = mongoose.model('Resturaunt', resturauntSchema)

module.exports = Resturaunt