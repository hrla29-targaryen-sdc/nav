const routes = require('express').Router()

//To load a static data, it's an array of names of department
const static_seed_data = require('./static_seed_data.json')

//To connect with Postgres pool
const pool = require('./pg_index')

const {	keyword , image1, image2 } = require('../seed-data/randomGenerator.js');

//To get an array of data
routes.get('/search', async (req,res)=> {
	let randomized = Math.floor(Math.random() * (10000000 - 9000000)) + 9000000 // Math.floor(Math.random() * 2000) // 
	let result = await pool.query(`select * from nordstroms where id = ${randomized}`)
	res.send(result.rows)
})

//To serve the static data to the client
routes.get('/navs', async (req,res)=> {
	res.send(static_seed_data)
})

//to post a data to the database
// routes.post('/search', async (req,res)=> {

// 	const query = {
// 	  text: 'INSERT INTO nordstroms() VALUES()',
// 	  values: [keyword(), image1(), image2()]
// 	}

// 	let result = await pool.query(query)
// 	res.send(result.rows[0])
// })

module.exports = routes