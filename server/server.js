const app = require('express')()
const { initializeDB } = require('../db/config')
const { getVendors, postVendor, getVendorById } = require('./routes/vendor')

initializeDB()

//Vendor GET Routes
// GET /api/v1/vendors	get all vendors
app.use('/api/v1/', getVendors)
// GET /api/v1/vendors/:id	get vendor by id
app.use('/api/v1/', getVendorById)

//Vendor POST Routes
// POST /api/v1/vendors create a new vendor
app.use('/api/v1/', postVendor)

app.listen(5001, () => {
	console.log('Server is running on port 5001')
})
