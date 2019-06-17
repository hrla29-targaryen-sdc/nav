const express = require('express')
const cors = require('cors')
const path = require('path')
const expressStaticGzip = require("express-static-gzip");

const pg_connection = require('./pg_index')
const pg_router = require('./pg_router')
// const router = require('./router')

let app = express();

// middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serving compressed bundle.js
app.use(expressStaticGzip(path.resolve(__dirname,'../client/dist'), {
	enableBrotli: true,
	orderPreference: ['br', 'gz']
}))

//to verify loader io
app.use("/loaderio-05c0ddbc07e2843cee0ab183f426ea54", (req,res)=> {
	res.send("loaderio-05c0ddbc07e2843cee0ab183f426ea54")
})

//front-end axios
// app.use('/navbar', router)

//postgres route
app.use('/pg/navbar', pg_router)

//postgres route
// psql postgres://ec2-3-87-44-33.compute-1.amazonaws.com:5432/nordstrom ubuntu

// establish port to listen on
const PORT = process.env.PORT || 80
app.listen(PORT, ()=> console.log("Server is up and running on ", PORT))