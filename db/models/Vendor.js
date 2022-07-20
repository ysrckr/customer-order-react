const { DataTypes, Model } = require('sequelize')
const {sequelize} = require('../config')

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
		customersId: {
			type: DataTypes.INTEGER,
			reference: {
				model: 'Customer',
				key: 'id',
			},
		},
	},
	{ sequelize, modelName: 'vendor' },
)

module.exports = Vendor

Vendor.hasMany(require('./Customer'))
