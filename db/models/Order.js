const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../config')

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
	},
	{ sequelize, modelName: 'order' },
)

module.exports = Order

Order.belongsTo(require('./Customer'))
Order.hasMany(require('./Suit'))
