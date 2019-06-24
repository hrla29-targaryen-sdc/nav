require('newrelic');
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
app.use("/loaderio-b6929d6ca0f6626db654da52ec4e5013", (req,res)=> {
	res.send("loaderio-b6929d6ca0f6626db654da52ec4e5013")
})

//front-end axios
// app.use('/navbar', router)

//postgres route
app.use('/pg/navbar', pg_router)

//postgres route
// psql postgres://ec2-54-219-173-46.us-west-1.compute.amazonaws.com:5432/nanona postgres

// establish port to listen on
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log("Server is up and running on", PORT))