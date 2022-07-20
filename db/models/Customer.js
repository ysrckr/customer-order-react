const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../config')

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
	},
	{ sequelize, modelName: 'customer' },
)

module.exports = Customer

Customer.belongsTo(require('./Vendor'))
Customer.hasMany(require('./Order'))
