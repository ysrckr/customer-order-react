const express = require('express')
const router = express.Router()
const multer = require('multer')
const { storage } = require('../cloudinary')
const upload = multer({ storage })
const Vendor = require('../../db/models/Vendor')
const Customer = require('../../db/models/Customer')
const Order = require('../../db/models/Order')
const Suit = require('../../db/models/Suit')

// GET Orders
// GET /api/v1/orders
const getOrders = router.get('/', async (req, res) => {
	try {
		const orders = await Order.findAll({
			include: [{ model: Customer }, { model: Suit }],
		})
		res.status(200).json({ orders })
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: error.message })
	}
})

const createOrder = router.post(
	'/',
	upload.fields([
		{ name: 'jacketPhoto', maxCount: 1 },
		{ name: 'pantsPhoto', maxCount: 1 },
		{ name: 'waistcoatPhoto', maxCount: 1 },
	]),
	async (req, res) => {
		try {
			const { customer, jacketDesc, pantsDesc, waistcoatDesc } = req.body
			const { jacketPhoto, pantsPhoto, waistcoatPhoto } = req.files
			const jacketUrl = jacketPhoto[0].path
			const pantsUrl = pantsPhoto[0].path
			const waistcoatUrl = waistcoatPhoto[0].path
			const order = await Order.create({
				customerId: customer,
			})

			const suit = await Suit.create({
				jacket: jacketDesc,
				pants: pantsDesc,
				waistcoat: waistcoatDesc,
				jacket_img: jacketUrl,
				pants_img: pantsUrl,
				waistcoat_img: waistcoatUrl,
				orderId: order.dataValues.id,
			})
			res.status(201).json({ order, suit })
		} catch (error) {
			console.error(error)
			res.status(500).json({ error: error.message })
		}
	},
)

module.exports = { getOrders, createOrder }
