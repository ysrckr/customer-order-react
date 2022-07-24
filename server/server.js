const app = require('express')()
// cors middleware
const cors = require('cors')
//Body parser middleware
const bodyParser = require('body-parser')
// DB connection
const { initializeDB } = require('../db/config')

// Vendor routes
const {
	getVendors,
	postVendor,
	getVendorById,
	deleteVendor,
} = require('./routes/vendor')
// Customer routes
const {
	getCustomers,
	postCustomer,
	getCustomerById,
	deleteCustomer,
} = require('./routes/customer')

// DB Connection
initializeDB()
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// cors middleware
app.use(cors())

// GET /api/v1/vendors	get all vendors
// GET /api/v1/vendors/:id	get vendor by id
// POST /api/v1/vendors create a new vendor
// DELETE /api/v1/vendors/:id
app.use('/api/v1/vendors', getVendors, getVendorById, postVendor, deleteVendor)

// GET /api/v1/customers	get all customers
// GET /api/v1/customers/:id	get customer by id
// POST /api/v1/customers create a new customer
app.use(
	'/api/v1/customers',
	getCustomers,
	getCustomerById,
	postCustomer,
	deleteCustomer,
)

const PORT = process.env.PORT || 5001

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
