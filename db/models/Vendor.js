const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../config')
const Customer = require('./Customer')
const Order = require('./Order')

class Vendor extends Model {}

Vendor.init(
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
		customerId: {
			type: DataTypes.INTEGER,
			reference: {
				model: 'Customer',
				key: 'id',
			},
		},
		orderId: {
			type: DataTypes.INTEGER,
			reference: {
				model: 'Order',
				key: 'id',
			},
		},
	},
	{ sequelize, modelName: 'vendor' },
)

module.exports = Vendor

