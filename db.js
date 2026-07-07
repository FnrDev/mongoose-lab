const mongoose = require('mongoose')

async function connectToDB() {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log('Connected to Database!')
    } catch (error) {
        console.log('Error connecting to database', error)
    }
}

module.exports = connectToDB