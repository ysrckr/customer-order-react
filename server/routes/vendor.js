const express = require('express')
const router = express.Router()
const Vendor = require('../../db/models/Vendor')
const Customer = require('../../db/models/Customer')

// GET /api/v1/vendors	get all vendors
const getVendors = router.get('/', async (req, res) => {
	try {
		const vendors = await Vendor.findAll({
			include: [{ model: Customer }],
		})
		res.status(200).json({ vendors })
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: error.message })
	}
})

// GET /api/v1/vendors/:id	get vendor by id
const getVendorById = router.get('/:id', async (req, res) => {
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
	'/:id/customers',
	async (req, res) => {
		try {
			const vendor = await Vendor.findByPk(req.params.id, {
				include: [{ model: Customer }],
			})
			const customers = vendor.customers

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

// DELETE /api/v1/vendors/:id
const deleteVendor = router.delete('/:id', async (req, res) => {
	try {
		const vendor = await Vendor.findByPk(req.params.id)
		await vendor.destroy()
		res.status(204).json({})
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
	deleteVendor,
}
