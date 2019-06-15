const { Pool } = require('pg')
let pool

pool = new Pool({
  host: 'ec2-3-88-194-253.compute-1.amazonaws.com',
  user: 'ubuntu',
  database: 'nordstrom',
  password: 'abcdef',
  port : 5432,
  max: 50,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

if (pool) {
  console.log("Postgresql is up and running on 5432")
}

module.exports = pool