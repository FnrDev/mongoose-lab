require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Resturaunt = require('./models/Resturaunt')

async function connectToDB() {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log('Connected to Database!')
    } catch (error) {
        console.log('Error connecting to database', error)
    }
}

connectToDB()

app.use(express.static('public'))

app.get('/resturaunts', async (req, res) => {
    const resturaunts = await Resturaunt.find()
    console.log(resturaunts)
    res.render('resturaunts.ejs', { resturaunts })
})

app.get('/returaunts/:id', async (req, res) => {
    const resturaunt = await Resturaunt.findById(req.params.id)
    console.log(resturaunt)
    res.render('returaunt-details.ejs', { resturaunt })
})

app.listen(3000, () => {
    console.log('App is ready')
})