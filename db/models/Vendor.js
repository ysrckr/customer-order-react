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
	},
	{ sequelize, modelName: 'vendor' },
)

module.exports = Vendor

Vendor.hasMany(Customer, { as: 'customers' })
Vendor.hasMany(Order, { through: Customer })
