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
	let {
		name,
		size,
		jacket_length,
		chest,
		jacket_waist,
		shoulder,
		sleeve,
		bicep,
		crotch,
		pants_waist,
		pants_length,
		hip,
		knee,
		vendorId,
	} = req.body
	if (size === '') size = 0
	if (jacket_length === '') jacket_length = 0
	if (chest === '') chest = 0
	if (jacket_waist === '') jacket_waist = 0
	if (shoulder === '') shoulder = 0
	if (sleeve === '') sleeve = 0
	if (bicep === '') bicep = 0
	if (crotch === '') crotch = 0
	if (pants_length === '') pants_length = 0
	if (pants_waist === '') pants_waist = 0
	if (hip === '') hip = 0
	if (knee === '') knee = 0
	try {
		
	} catch (err) {
		console.log(err)
	}
	try {
		const customer = await Customer.create({
			name,
			size,
			jacket_length,
			chest,
			jacket_waist,
			shoulder,
			sleeve,
			bicep,
			crotch,
			pants_length,
			pants_waist,
			hip,
			knee,
			vendorId,
		})
		res.status(201).json({ customer })
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: error.message })
	}
})

//DELETE customer
// DELETE api/v1/customers/:id
const deleteCustomer = router.delete('/customers/:id', async (req, res) => {
	const { id } = req.params
	try {
		const customer = await Customer.findByPk(id)
		await customer.destroy()
		res.status(204)
	} catch (err) {
		console.log(err)
		res.status(500).json({
			error: err.message,
		})
	}
})
module.exports = { getCustomers, postCustomer, getCustomerById, deleteCustomer }
