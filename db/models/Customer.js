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
		vendorId: {
			type: DataTypes.INTEGER,
			reference: {
				model: 'Vendor',
				key: 'id',
			},
			allowNull: false,
		},
		orderId : {
			type: DataTypes.INTEGER,
			reference: {
				model: 'Order',
				key: 'id',
			},
		},
		suitId : {
			type: DataTypes.INTEGER,
			reference: {
				model: 'Suit',
				key: 'id',
			},
		}

	},
	{ sequelize, modelName: 'customer' },
)

module.exports = Customer


