const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../config')
const Order = require('./Order')
const Customer = require('./Customer')

class Suit extends Model {}

Suit.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		jacket: {
			type: DataTypes.STRING,
		},
		jacket_img: {
			type: DataTypes.STRING,
		},
		pants: {
			type: DataTypes.STRING,
		},
		pants_img: {
			type: DataTypes.STRING,
		},
		waistcoat: {
			type: DataTypes.STRING,
		},
		waistcoat_img: {
			type: DataTypes.STRING,
		},
	},
	{ sequelize, modelName: 'suit' },
)

module.exports = Suit

Suit.belongsTo(Order)
Suit.belongsTo(Customer, { through: Order })
