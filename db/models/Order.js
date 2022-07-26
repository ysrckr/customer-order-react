const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../config')

const Suit = require('./Suit')

class Order extends Model {}

Order.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
	},
	{ sequelize, modelName: 'order' },
)

module.exports = Order

Order.hasMany(Suit, {
	foreignKey: {
		name: 'orderId',
		allowNull: false,
	},
})
Suit.belongsTo(Order)
