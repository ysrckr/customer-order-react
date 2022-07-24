const cloudinary = require('cloudinary').v2

cloudinary.config({
	secure: true,
})

const uploadImage = async imagePath => {
	// Use the uploaded file's name as the asset's public ID and
	// allow overwriting the asset with new versions
	const options = {
		use_filename: true,
		unique_filename: true,
		overwrite: false,
		/* eager: [
			{
				width: 300,
				height: 300,
				crop: 'fill',
			},
			{
				width: 600,
				height: 600,
				crop: 'scale',
			},
		], */
	}

	try {
		// Upload the image
		const result = await cloudinary.uploader.upload(imagePath, options)
		
		return {
			public_id: result.public_id,
			asset_id: result.asset_id,
			url: result.secure_url,
			/* width: result.width,
			height: result.height,
			eager: result.eager, */
		}
	} catch (error) {
		console.error(error)
	}
}

module.exports = {
	uploadImage,
}
