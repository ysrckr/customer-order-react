const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

cloudinary.config({
	secure: true,
})

const storage = new CloudinaryStorage({
	cloudinary: cloudinary,
	params: {
		folder: 'suit-app',
		allowedFormats: ['jpg', 'png', 'jpeg'],
		use_filename: true,
	},
})

module.exports = {
	cloudinary,
	storage,
}
