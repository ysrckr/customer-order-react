const { Sequelize } = require('sequelize')

// dotenv is a module that loads environment variables from a .env file into process.env
require('dotenv').config({
	path: '../.env',
})

// create a new instance of DB
const sequelize = new Sequelize(
	'customer_order',
	'yasar',
	process.env.DB_PASS,
	{
		host: 'localhost',
		dialect: 'postgres',
	},
)

// Initialize the DB
const initializeDB = async () => {
	try {
		sequelize.authenticate()
		console.log('Connection has been established successfully.')
		sequelize.sync({ force: true })
	} catch (error) {
		console.error('Unable to connect to the database:', error)
	}
}

module.exports = { initializeDB, sequelize }
