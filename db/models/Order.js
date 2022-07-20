const {DataTypes, Model} = require('sequelize');
const {sequelize} = require('../config');

class Order extends Model {}

Order.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    suitId: {
        type: DataTypes.INTEGER,
        reference: {
            model: 'Suit',
            key: 'id',
        }
    },
    customerId: {
        type: DataTypes.INTEGER,
        reference: {
            model: 'Customer',
            key: 'id',
    }
}}, { sequelize, modelName: 'order' });

    module.exports = Order;

    Order.belongsTo(require('./Customer'));
    Order.hasMany(require('./Suit'));
