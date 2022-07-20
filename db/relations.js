import Vendor from './Vendor'
import Customer from './Customer'
import Order from './Order'
import Suit from './Suit'



Vendor.hasMany(Customer)
Customer.belongsTo(Vendor)
Customer.hasMany(Order)
Order.belongsTo(Customer)
Customer.hasMany(Suit, { through: Order })
Order.hasMany(Suit)
Suit.belongsTo(Order)
Suit.belongsTo(Customer, {
	through: Order,
})
Vendor.hasMany(Order, { through: Customer })
