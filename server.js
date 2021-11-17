const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/config')

//config dotenv
dotenv.config()

//connection mongodb
connectDB()

const app = express()


//middlewares
app.use(express.json())
app.use(morgan('dev'))

//route
app.use('/api/services', require('./routes/serviceRoute'))
app.use('/api/users', require("./routes/userRoutes"))

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/servicer/build")));
    app.get("*",(req, res)=>{
        res.sendFile(path.resolve(_dirname, "servicer", "build", "index.html"))
    })
}else{
        app.get('/', (req,res)=>{
        res.send('<h1>Hello from node server via nodemon</h1>')
    })
}

const port = process.env.PORT || 8080

app.listen(port, ()=>{
console.log(`Server running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgMagenta.white);
})