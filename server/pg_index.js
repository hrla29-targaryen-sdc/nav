const { Pool } = require('pg')
let pool

//replica set => ec2-54-219-173-46.us-west-1.compute.amazonaws.com
//standlaone  =>

pool = new Pool({
  host: 'ec2-54-219-173-46.us-west-1.compute.amazonaws.com',
  user: 'postgres',
  database: 'nordstrom',
  password: 'abcdef',
  port : 5432,
  max: 60,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
  	return console.log("Postgres got an error : ", err )
  }
  console.log("Postgres is up and running on 5432")
})

module.exports = pool