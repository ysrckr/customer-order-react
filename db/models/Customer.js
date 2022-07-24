const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../config')

const Order = require('./Order')


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
		jacket_length: {
			type: DataTypes.FLOAT,
		},
		chest: {
			type: DataTypes.FLOAT,
		},
		jacket_waist: {
			type: DataTypes.FLOAT,
		},
		shoulder: {
			type: DataTypes.FLOAT,
		},
		sleeve: {
			type: DataTypes.FLOAT,
		},
		bicep: {
			type: DataTypes.FLOAT,
		},
		crotch: {
			type: DataTypes.FLOAT,
		},
		pants_waist: {
			type: DataTypes.FLOAT,
		},
		pants_length: {
			type: DataTypes.FLOAT,
		},
		hip: {
			type: DataTypes.FLOAT,
		},
		knee: {
			type: DataTypes.FLOAT,
		},
	},
	{ sequelize, modelName: 'customer' },
)

module.exports = Customer

Customer.hasMany(Order, {
	foreignKey: 'customerId',
})
Order.belongsTo(Customer)
