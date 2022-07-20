const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../config')
const Customer = require('./Customer')
const Suit = require('./Suit')

class Order extends Model {}

Order.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		customerId: {
			type: DataTypes.INTEGER,
			reference: {
				model: 'Customer',
				key: 'id',
			},
			allowNull: false,
		},
		suitId: {
			type: DataTypes.INTEGER,
			reference: {
				model: 'Suit',
				key: 'id',
				allowNull: false,
			},
		},
		vendorId: {
			type: DataTypes.INTEGER,
			reference: {
				model: 'Vendor',
				key: 'id',
				allowNull: false,
			},
		},
	},
	{ sequelize, modelName: 'order' },
)

module.exports = Order

