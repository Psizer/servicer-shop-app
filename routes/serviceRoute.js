const express = require('express')
const router = express.Router()

const serviceModel = require('../models/serviceModel')

//GET ALL SERVICE || @GET REQUEST
router.get('/getAllServices', async (req,res)=>{
    try {
        const services = await serviceModel.find({})
        res.send(services)
    } catch (error) {
        res.json({message:error})
    }
})

module.exports = router