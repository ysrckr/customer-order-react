const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../config')
const Vendor = require('./Vendor')
const Order = require('./Order')
const Suit = require('./Suit')

class Customer extends Model {}

Customer.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		size: {
			type: DataTypes.INTEGER,
		},

	},
	{ sequelize, modelName: 'customer' },
)

module.exports = Customer

Customer.hasMany(Order, {
	foreignKey: 'customerId'
})
Order.belongsTo(Customer)