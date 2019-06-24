const { Pool } = require('pg')
let pool

// psql postgres://ec2-35-174-167-7.compute-1.amazonaws.com:5432/nordstrom ubuntu

pool = new Pool({
  host: 'ec2-52-53-214-112.us-west-1.compute.amazonaws.com',
  user: 'postgres',
  database: 'nordstrom',
  password: 'abcdef',
  port : 5432,
  max: 40,
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