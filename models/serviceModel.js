const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    varients: [],
    prices:[],
    image:{
            type:String,
            required:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true});

const serviceModel = mongoose.model('service',serviceSchema)
module.exports = serviceModel