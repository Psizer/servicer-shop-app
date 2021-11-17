const mongoose = require('mongoose')
const dotenv = require('dotenv')
require('colors')
const connectDb = require('./config/config')
const Service = require('./models/serviceModel')
const Services = require('./data/service-data')

//config dotenv and mongodb conn file
dotenv.config()
connectDb()

//import data
const importData = async () =>{
    try {
        await Service.deleteMany()
        const sampleData = Services.map(service => {return{...service}})
        await Service.insertMany(sampleData)
        console.log('Data Imported'.bgGreen.white)
        process.exit()
    } catch (error) {
        console.log(`${error}`.bgRed.white)
        process.exit(1)
    }
}

const dataDestroy = ()=>{};

if(process.argv[2]==='-d'){
    dataDestroy()
}else{
    importData()
}