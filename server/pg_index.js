const { Pool } = require('pg')
let pool

// psql postgres://ec2-54-209-252-29.compute-1.amazonaws.com:5432/nordstrom ubuntu

pool = new Pool({
  host: 'ec2-54-209-252-29.compute-1.amazonaws.com',
  user: 'ubuntu',
  database: 'nordstrom',
  password: 'abcdef',
  port : 5432,
  max: 50,
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