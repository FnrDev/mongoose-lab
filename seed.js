require('dotenv').config()
const mongoose = require('mongoose')
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

async function seedResturaunts() {
    try {
        await Resturaunt.insertMany([{
            name: 'Al Baik Resturntant',
            isOpen: true,
            address: 'City Centre Road 4650, Manama',
            phone: '55509876'
        },
        {
            name: "Haji's Traditional Cafe",
            isOpen: false,
            address: '150 شارع الحكومة, Manama',
            phone: '06892543'
        },
        {
            name: 'Al Jabriya Turkish Restaurant',
            isOpen: true,
            address: 'Rd No 2643, Busaiteen',
            phone: '17330108'
        },
        {
            name: 'Urban Slice Pizza',
            isOpen: false,
            address: 'Rd No 3421, Manama',
            phone: '043284832'
        }
        ]
        )
    } catch (error) {
        console.log('Error seeding data', error)
    }
}

seedResturaunts()