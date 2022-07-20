const express = require('express')
const router = express.Router()
const Customer = require('../../db/models/Customer')

// GET customers
// GET /api/v1/customers
const getCustomers = router.get('/customers', async (req, res) => {
	try {
		const customers = await Customer.findAll()
		res.status(200).json({ customers })
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: error.message })
	}
})
// GET customer by id
// GET /api/v1/customers/:id
const getCustomerById = router.get('/customers/:id', async (req, res) => {
	try {
		const customer = await Customer.findByPk(req.params.id)
		res.status(200).json({ customer })
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: error.message })
	}
})

// POST customer
// POST /api/v1/customers
const postCustomer = router.post('/customers', async (req, res) => {
	const { name, size, vendorId } = req.body
	try {
		const customer = await Customer.create({
			name,
			size,
			vendorId,
		})
		res.status(201).json({ customer })
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: error.message })
	}
})

module.exports = { getCustomers, postCustomer, getCustomerById }
