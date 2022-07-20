const app = require('express')()
const cors = require('cors')
const { initializeDB } = require('../db/config')
const { getVendors, postVendor, getVendorById } = require('./routes/vendor')
const {
	getCustomers,
	postCustomer,
	getCustomerById,
} = require('./routes/customer')

initializeDB()

app.use(cors())

//Vendor GET Routes
// GET /api/v1/vendors	get all vendors
app.use('/api/v1/', getVendors)
// GET /api/v1/vendors/:id	get vendor by id
app.use('/api/v1/', getVendorById)

//Vendor POST Routes
// POST /api/v1/vendors create a new vendor
app.use('/api/v1/', postVendor)

//Customer GET Routes
// GET /api/v1/customers	get all customers
app.use('/api/v1/', getCustomers)
// GET /api/v1/customers/:id	get customer by id
app.use('/api/v1/', getCustomerById)
// POST /api/v1/customers create a new customer
app.use('/api/v1/', postCustomer)

const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
