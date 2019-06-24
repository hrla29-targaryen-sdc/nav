const { Pool } = require('pg')
let pool

//replica set => ec2-54-219-173-46.us-west-1.compute.amazonaws.com
//standlaone  =>

//virgin => ec2-54-173-184-106.compute-1.amazonaws.com

pool = new Pool({
  host: 'ec2-54-173-184-106.compute-1.amazonaws.com',
  user: 'postgres',
  database: 'nordstrom',
  password: 'abcdef',
  port : 5432,
  max: 100,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 4000,
})

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
  	return console.log("Postgres got an error : ", err )
  }
  console.log("Postgres is up and running on 5432")
})

module.exports = pool