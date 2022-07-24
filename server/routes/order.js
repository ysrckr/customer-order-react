import Vendor from '../../db/models/Vendor'
import Customer from '../../db/models/Customer'
import Order from '../../db/models/Order'
import router from 'express'

// GET Orders
// GET /api/v1/orders
const getOrders = router.get('/orders', async (req, res) => {
	try {
		const orders = await Order.findAll({
			include: [{ model: Customer }, { model: Vendor }],
		})
		res.status(200).json({ orders })
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: error.message })
	}
})








module.exports = {getOrders}