const express = require('express')
const router = express.Router()
const Vendor = require('../../db/models/Vendor')

// GET /api/v1/vendors	get all vendors
const getVendors = router.get('/vendors', async (req, res) => {
	try {
		const vendors = await Vendor.findAll()
		res.status(200).json({ vendors })
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: error.message })
	}
})

// GET /api/v1/vendors/:id	get vendor by id
const getVendorById = router.get('/vendors/:id', async (req, res) => {
	try {
		const vendor = await Vendor.findByPk(req.params.id)
		res.status(200).json({ vendor })
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: error.message })
	}
})

// GET /api/v1/vendors/:id/customers	get all customers of vendor by id
const getCustomersByVendorId = router.get(
	'/vendors/:id/customers',
	async (req, res) => {
		try {
			const vendor = await Vendor.findByPk(req.params.id)
			const customers = await vendor.getCustomers()
			res.status(200).json({ customers })
		} catch (error) {
			console.error(error)
			res.status(500).json({ error: error.message })
		}
	},
)


// POST /api/v1/vendors create a new vendor
const postVendor = router.post('/', async (req, res) => {
	const { name } = req.body
	try {
		const vendor = await Vendor.create({
			name,
		})
		res.status(201).json({ vendor })
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: error.message })
	}
})

module.exports = {
	getVendors,
	postVendor,
	getVendorById,
	getCustomersByVendorId,
}
