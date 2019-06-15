const Sequelize = require('sequelize');

// const connection = new Sequelize('postgres', 'postgres', '', {
//   host: 'localhost',
//   dialect: 'postgres',
//   logging: false
// })

const connection = new Sequelize('nordstrom', 'ubuntu', 'abcdef', {
  host: 'ec2-3-88-194-253.compute-1.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  logging: false
})
//postgres://ec2-3-88-194-253.compute-1.amazonaws.com:5432/nordstrom ubuntu

connection
.authenticate()
.then(()=> console.log("\Postgres is up and running on 5432\n"))
.catch(err=> console.log("error : " , err))

const Nordstrom = connection.define('nordstroms', {
	keyword: {
		type: Sequelize.STRING(250)
	},
	image1: {
		type: Sequelize.ARRAY(Sequelize.TEXT)
	},
	image2: {
		type: Sequelize.ARRAY(Sequelize.TEXT)
	}
}, { timestamps : false })

connection.sync({force:false});
